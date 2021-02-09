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
};

function getItem(item) {
    const newCard = templateElement.content.cloneNode(true);
    const elementTitle = newCard.querySelector(".elements__title");
    elementTitle.textContent = item.name;
    const elementPhoto = newCard.querySelector(".elements__photo");
    elementPhoto.src = item.link;
    elementPhoto.alt = item.alt;
    elementPhoto.name = item.name;
    return newCard;
}
render();

const elementPhotos = document.querySelectorAll(".elements__photo");
elementPhotos.forEach((item) => {
    item.addEventListener("click", function() {
         popup.classList.add("popup_opened");
         popup.classList.add("popup_dark");
         document.querySelector(".popup__photo-container").classList.add('popup__photo-container_opened');
         document.querySelector(".popup__wide-photo").src = item.src;
         document.querySelector(".popup__figcaption").textContent = item.name;
     })
});

const likeBtns = document.querySelectorAll(".elements__likebtn");
likeBtns.forEach((item) => {
    item.addEventListener('click', function() {
        item.classList.toggle("elements__likebtn_active");
    });
});

const closeBtns = document.querySelectorAll(".popup__closedbtn");
closeBtns.forEach((item) => {
    item.addEventListener('click', function(evt){
        evt.preventDefault();
        popup.classList.remove("popup_opened");
    });
})

function openPopupProfile() {
    popup.classList.add("popup_opened");
    profileInfoForm.classList.remove("popup__profileinfo");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function submitPopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove("popup_opened");
}

const addBtn = document.querySelector(".profile__addbtn");
const photoadding = document.querySelector(".popup__photoadding");
const placenameInput = document.querySelector(".popup__placename");
const linkInput = document.querySelector(".popup__link");

function openPopupPhoto() {
    popup.classList.add("popup_opened");
    photoadding.classList.remove("popup__photoadding");
}

const createBtn = document.querySelector(".popup__createbtn");

function addPhoto(evt) {
    evt.preventDefault();
    const placeName = placenameInput.value;
    const linkPhoto = linkInput.value;
    const newPhoto = getItem({name:placeName, link: linkPhoto, alt: placeName});
    elementsContainer.prepend(newPhoto);
    popup.classList.remove("popup_opened");
}

const deleteBtns = document.querySelectorAll(".elements__deletebtn");
deleteBtns.forEach((item) => {
    item.addEventListener('click', function(event) {
        const targetElement = event.target;
        const targetItem = targetElement.closest(".elements__element");
        targetItem.remove();
    });
});

editBtn.addEventListener("click", openPopupProfile);
profileInfoForm.addEventListener("submit", submitPopup);
addBtn.addEventListener("click", openPopupPhoto);
photoadding.addEventListener("submit", addPhoto);