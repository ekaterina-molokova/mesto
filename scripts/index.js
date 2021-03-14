import {popups, profileInfoForm, photoAddingForm, profileName, profileJob, editBtn, addBtn,
    nameInput, jobInput, placeNameInput, linkInput, elementsContainer, initialCards, validationSelectors} from "./data.js";

import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeViaEsc);
}

function createCard (object) {
    const card = new Card(object, ".template");
    const cardElement = card.generateCard();
    return cardElement;
}

initialCards.forEach((item) => {
    console.log(createCard(item));
    elementsContainer.append(createCard(item));
});

Array.from(document.querySelectorAll('.popup__container'))
.forEach((formElement) => {
    const formValidator = new FormValidator(validationSelectors, formElement);
    const validForm = formValidator.enableValidation();
});

function makeSubmitbtnDisabled (popup) {
    const submitBtn = popup.querySelector(".popup__submitbtn");
    submitBtn ? submitBtn.classList.add("popup__submitbtn_disabled") : "";
}

function openProfileInfoForm () {
    openPopup(profileInfoForm);
    makeSubmitbtnDisabled(profileInfoForm);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function openPhotoAddingForm () {
    openPopup(photoAddingForm);
    makeSubmitbtnDisabled(photoAddingForm);
    placeNameInput.value = "";
    linkInput.value = "";
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
    createCard ({name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value});
    elementsContainer.prepend(createCard ({name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value}));
    closePopup (photoAddingForm);
}

editBtn.addEventListener("click", openProfileInfoForm);
addBtn.addEventListener("click", openPhotoAddingForm);
profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);