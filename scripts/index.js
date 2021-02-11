const profileInfoForm = document.querySelector(".popup__profile-info-form");
const photoAddingForm = document.querySelector(".popup__photo-adding-form");
const viewingPhotoForm = document.querySelector(".popup__viewing-photo");
const viewingPhotoContainer = viewingPhotoForm.querySelector(".popup__container");
const editBtn = document.querySelector(".profile__editbtn");
const addBtn = document.querySelector(".profile__addbtn");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const placeNameInput = document.querySelector(".popup__placename");
const linkInput = document.querySelector(".popup__link");
const elementsContainer = document.querySelector(".elements");
const templateElement = document.querySelector(".template");
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
];

function render() {
    const cards = initialCards
        .map(getItem)
    elementsContainer.prepend(...cards);
}

function getItem(item) {
    const newCard = templateElement.content.cloneNode(true);
    const elementTitle = newCard.querySelector(".elements__title");
    elementTitle.textContent = item.name;
    const elementPhoto = newCard.querySelector(".elements__photo");
    elementPhoto.src = item.link;
    elementPhoto.alt = item.alt;
    elementPhoto.name = item.name;
    const elementLikeBtn = newCard.querySelector(".elements__likebtn");
    elementLikeBtn.addEventListener('click', function() {
        elementLikeBtn.classList.toggle("elements__likebtn_active");
    });
    const elementDeleteBtn = newCard.querySelector(".elements__deletebtn");
    elementDeleteBtn.addEventListener('click', function(event) {
        const targetElement = event.target;
        const targetItem = targetElement.closest(".elements__element");
        targetItem.remove();
    });
    elementPhoto.addEventListener("click", function() {
        openViewingPhotoForm ();
        viewingPhotoForm.setAttribute("style", "background: rgba(0, 0, 0, .9)");
        viewingPhotoContainer.classList.remove("popup__container");
        viewingPhotoContainer.classList.add("popup__photo-container");
        const widePhoto = document.querySelector(".popup__wide-photo");
        widePhoto.src = item.link;
        widePhoto.alt = item.alt;
        const widePhotoFigcaption = document.querySelector(".popup__figcaption");
        widePhotoFigcaption.textContent = item.name;
    });

    return newCard;
}

render();

function openPopup(popup) {
    popup.classList.add("popup_opened");
}

function openProfileInfoForm () {
    openPopup(profileInfoForm);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function openPhotoAddingForm () {
    openPopup(photoAddingForm);
    placeNameInput.value = "";
    linkInput.value = "";
}

function openViewingPhotoForm () {
    openPopup(viewingPhotoForm);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

function closeProfileInfoForm () {
    closePopup(profileInfoForm);
}

function closePhotoAddingForm () {
    closePopup(photoAddingForm);
}

function closeViewingPhotoForm () {
    closePopup(viewingPhotoForm);
}

function submitPopup (evt) {
    evt.preventDefault();
}

function submitProfileInfoForm (evt) {
    submitPopup (evt);
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeProfileInfoForm ();
}

function addPhoto (evt) {
    submitPopup (evt);
    const newPhoto = getItem({name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value});
    elementsContainer.prepend(newPhoto);
    closePhotoAddingForm ();
}

const closedBtnProfile = profileInfoForm.querySelector(".popup__closedbtn");
const closedBtnPhoto = photoAddingForm.querySelector(".popup__closedbtn");
const closedBtnWidePhoto = viewingPhotoForm.querySelector(".popup__closedbtn");

editBtn.addEventListener("click", openProfileInfoForm);
addBtn.addEventListener("click", openPhotoAddingForm);
closedBtnProfile.addEventListener("click", closeProfileInfoForm);
closedBtnPhoto.addEventListener("click", closePhotoAddingForm);
closedBtnWidePhoto.addEventListener("click", closeViewingPhotoForm);
profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);