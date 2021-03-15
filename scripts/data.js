const popups = document.querySelectorAll(".popup");
const formsArray = Array.from(document.querySelectorAll(".popup__container"));

const profileInfoForm = document.querySelector(".popup_profile-info-form");
const photoAddingForm = document.querySelector(".popup_photo-adding-form");
const viewingPhotoForm = document.querySelector(".popup_viewing-photo");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const editBtn = document.querySelector(".profile__editbtn");
const addBtn = document.querySelector(".profile__addbtn");

const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");
const placeNameInput = document.querySelector(".popup__placename");
const linkInput = document.querySelector(".popup__link");

const elementsContainer = document.querySelector(".elements");

const widePhoto = document.querySelector(".popup__wide-photo");
const widePhotoFigcaption = document.querySelector(".popup__figcaption");

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

const validationSelectors = {
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submitbtn",
    inactiveButtonClass: "popup__submitbtn_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__input-error-message_active"
}

export {popups, formsArray, profileInfoForm, photoAddingForm, viewingPhotoForm, profileName, profileJob,
    editBtn, addBtn, nameInput, jobInput, placeNameInput, linkInput, elementsContainer,
    widePhoto, widePhotoFigcaption, initialCards, validationSelectors}