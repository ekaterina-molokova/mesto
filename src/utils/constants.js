const profileInfoForm = document.querySelector(".popup_profile-info-form");
const photoAddingForm = document.querySelector(".popup_photo-adding-form");

const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");
const avatarInput = document.querySelector(".popup__avatar-link");

const editInfoBtn = document.querySelector(".profile__editbtn_info");
const editAvatarBtn = document.querySelector(".profile__editbtn_avatar");

const addBtn = document.querySelector(".profile__addbtn");

const escape = "Escape";

const avatar = document.querySelector(".profile__avatar");

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

export {profileInfoForm, photoAddingForm, nameInput, jobInput, avatarInput, editInfoBtn, editAvatarBtn, addBtn, initialCards, validationSelectors, escape, avatar}