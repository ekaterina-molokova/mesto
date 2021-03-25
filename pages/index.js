import {popups, profileInfoForm, photoAddingForm, profileName, profileJob, editBtn, addBtn,
    nameInput, jobInput, placeNameInput, linkInput, elementsContainer, initialCards, validationSelectors,
    viewingPhotoForm, widePhoto, widePhotoFigcaption} from "../utils/constants.js";

import {FormValidator} from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const cardList = new Section({
    initialCards,
    renderer: (item) => {
    const card = new Card(item, ".template", handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
}
},
    elementsContainer);
cardList.renderItems();

popups.forEach((item) => {
   const popup = new Popup (".popup");
   popup.open();
   popup.close();
});

const UserInfoPopup = new UserInfo(".popup_profile-info-form");
const PhotoAddingPopup = new PopupWithForm(".popup_photo-adding-form");
const ViewingPhotoPopup = new PopupWithImage(".popup_viewing-photo");

function handleCardClick(link, name, alt) {
    ViewingPhotoPopup.open();
    widePhoto.src = link;
    widePhotoFigcaption.textContent = name;
    widePhoto.alt = alt;
}

const profileFormValidator = new FormValidator(validationSelectors, profileInfoForm);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSelectors, photoAddingForm);
addCardFormValidator.enableValidation();

/*
import {popups, profileInfoForm, photoAddingForm, profileName, profileJob, editBtn, addBtn,
    nameInput, jobInput, placeNameInput, linkInput, elementsContainer, initialCards, validationSelectors,
    viewingPhotoForm, widePhoto, widePhotoFigcaption} from "../utils/constants.js";
import Card from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";

function createCard (object) {
    const card = new Card(object, ".template", handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

initialCards.forEach((item) => {
    elementsContainer.append(createCard(item));
});

const profileFormValidator = new FormValidator(validationSelectors, profileInfoForm);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSelectors, photoAddingForm);
addCardFormValidator.enableValidation();

// function makeSubmitbtnDisabled (popup) {
//     const submitBtn = popup.querySelector(".popup__submitbtn");
//     submitBtn ? submitBtn.classList.add("popup__submitbtn_disabled") : "";
// }

function handleCardClick(link, name, alt) {
    openPopup(viewingPhotoForm);
    widePhoto.src = link;
    widePhotoFigcaption.textContent = name;
    widePhoto.alt = alt;
}

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeViaEsc);
}

function openProfileInfoForm () {
    openPopup(profileInfoForm);
    // makeSubmitbtnDisabled (profileInfoForm);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    profileFormValidator.resetValidation();
}

function openPhotoAddingForm () {
    openPopup(photoAddingForm);
    // makeSubmitbtnDisabled (photoAddingForm);
    placeNameInput.value = "";
    linkInput.value = "";
    addCardFormValidator.resetValidation();
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeViaEsc);
}

function closeViaEsc (evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

popups.forEach((item) => {
    item.addEventListener("click", function (evt){
        if(evt.target.classList.contains("popup")) {
            closePopup(item);
        }
        if(evt.target.classList.contains("popup__closedbtn")) {
            closePopup(item);
        }
    });
});

function preventSubmit (evt) {
    evt.preventDefault();
}

function submitProfileInfoForm (evt) {
    preventSubmit (evt);
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup (profileInfoForm);
}

function addPhoto (evt) {
    preventSubmit (evt);
    const newPhoto = {name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value};
    createCard (newPhoto);
    elementsContainer.prepend(createCard (newPhoto));
    closePopup (photoAddingForm);
}

editBtn.addEventListener("click", openProfileInfoForm);
addBtn.addEventListener("click", openPhotoAddingForm);
profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);
*/