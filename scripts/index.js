const popup = document.querySelector(".popup");
const editBtn = document.querySelector(".profile__editbtn");
const profileInfoForm = document.querySelector(".popup__profileinfo");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
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

const elementsContainer = document.querySelector(".elements");
const templateElement = document.querySelector(".template");

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
    return newCard;
}

render();

function openPopup() {
    popup.classList.add("popup_opened");
}

function closePopup(evt) {
    evt.preventDefault();
    popup.classList.remove("popup_opened");
    popup.classList.add("popup_closed");
    setTimeout(function() {
        popup.classList.remove("popup_closed");
    }, 2000);
}


const elementPhotos = document.querySelectorAll(".elements__photo");

elementPhotos.forEach((item) => {
    item.addEventListener("click", function() {
         openPopup();
         popup.classList.add("popup_dark");
         document.querySelector(".popup__photo-container").classList.add('popup__photo-container_opened');
         document.querySelector(".popup__wide-photo").src = item.src;
         document.querySelector(".popup__wide-photo").alt = item.alt;
         document.querySelector(".popup__figcaption").textContent = item.name;
     })
});

const closeBtns = document.querySelectorAll(".popup__closedbtn");

closeBtns.forEach((item) => {
    item.addEventListener('click', function (evt) {
        closePopup(evt);
        if (elementPhotos || profileInfoForm || photoadding) {
            setTimeout(function() {
                document.querySelector(".popup__photo-container").classList.remove('popup__photo-container_opened');
                popup.classList.remove("popup_dark");
                profileInfoForm.classList.add("popup__profileinfo");
                photoadding.classList.add("popup__photoadding");
                jobInput.value = jobInput.textContent;
                nameInput.value = nameInput.textContent;
                placenameInput.value = " ";
                linkInput.value = " ";
            }, 1000);
        }
    });
});

function openProfile() {
    openPopup();
    profileInfoForm.classList.remove("popup__profileinfo");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function submitPopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(evt);
}

const addBtn = document.querySelector(".profile__addbtn");
const photoadding = document.querySelector(".popup__photoadding");
const placenameInput = document.querySelector(".popup__placename");
const linkInput = document.querySelector(".popup__link");

function openPhotoForm() {
    openPopup();
    photoadding.classList.remove("popup__photoadding");
    placenameInput.textContent = placenameInput.placeholder;
    linkInput.textContent = linkInput.placeholder;
}

function addPhoto(evt) {
    evt.preventDefault();
    const placeName = placenameInput.value;
    const linkPhoto = linkInput.value;
    const newPhoto = getItem({name:placeName, link: linkPhoto, alt: placeName});
    elementsContainer.prepend(newPhoto);
    placenameInput.value = " ";
    linkInput.value = " ";
    closePopup(evt);
}

editBtn.addEventListener("click", openProfile);
profileInfoForm.addEventListener("submit", submitPopup);
addBtn.addEventListener("click", openPhotoForm);
photoadding.addEventListener("submit", addPhoto);