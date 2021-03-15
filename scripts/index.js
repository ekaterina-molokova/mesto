import {popups, formsArray, profileInfoForm, photoAddingForm, profileName, profileJob, editBtn, addBtn,
    nameInput, jobInput, placeNameInput, linkInput, elementsContainer, initialCards, validationSelectors,
    viewingPhotoForm, widePhoto, widePhotoFigcaption} from "./data.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

function createCard (object) {
    const card = new Card(object, ".template", handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

initialCards.forEach((item) => {
    elementsContainer.append(createCard(item));
});

function valideForm () {
    formsArray.forEach((formElement) => {
        const formValidator = new FormValidator(validationSelectors, formElement);
        formValidator.enableValidation();
        formValidator.resetValidation();
    });
}

function makeSubmitbtnDisabled (popup) {
    const submitBtn = popup.querySelector(".popup__submitbtn");
    submitBtn ? submitBtn.classList.add("popup__submitbtn_disabled") : "";
}

export function handleCardClick(link, name, alt) {
    openPopup(viewingPhotoForm);
    widePhoto.src = link;
    widePhotoFigcaption.textContent = name;
    widePhoto.alt = alt;
  }
  
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeViaEsc);
    valideForm ();
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
    const newPhoto = {name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value};
    createCard (newPhoto);
    elementsContainer.prepend(createCard (newPhoto));
    closePopup (photoAddingForm);
}

editBtn.addEventListener("click", openProfileInfoForm);
addBtn.addEventListener("click", openPhotoAddingForm);
profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);