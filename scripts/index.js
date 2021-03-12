import {popups, profileInfoForm, photoAddingForm, profileName, profileJob, editBtn, addBtn,
    nameInput, jobInput, placeNameInput, linkInput, elementsContainer} from "./data.js";

import {Card} from "./Card.js";

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeViaEsc);
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

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeViaEsc);
    const submitBtn = popup.querySelector(".popup__submitbtn");
    submitBtn ? submitBtn.classList.add("popup__submitbtn_disabled") : "";
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
    const photo = new Card({name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value}, ".template");
    const newPhoto = photo.generateCard();
    elementsContainer.prepend(newPhoto);
    closePopup (photoAddingForm);
}

editBtn.addEventListener("click", openProfileInfoForm);
addBtn.addEventListener("click", openPhotoAddingForm);
profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);