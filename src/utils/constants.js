const profileInfoForm = document.querySelector(".popup_profile-info-form");
const photoAddingForm = document.querySelector(".popup_photo-adding-form");

const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");

const editInfoBtn = document.querySelector(".profile__editbtn_info");
const editAvatarBtn = document.querySelector(".profile__editbtn_avatar");

const addBtn = document.querySelector(".profile__addbtn");

const escape = "Escape";

const avatarImage = document.querySelector(".profile__avatar");

const validationSelectors = {
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submitbtn",
    inactiveButtonClass: "popup__submitbtn_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__input-error-message_active"
}

export {profileInfoForm, photoAddingForm, nameInput, jobInput, editInfoBtn, editAvatarBtn, addBtn, validationSelectors, escape, avatarImage}