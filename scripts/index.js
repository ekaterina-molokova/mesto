import {popups, profileInfoForm, photoAddingForm, viewingPhotoForm,
    profileName, profileJob, editBtn, addBtn, nameInput, jobInput, placeNameInput, linkInput,
    elementsContainer, templateElement, widePhoto, widePhotoFigcaption,
    closedBtnProfile, closedBtnPhoto, closedBtnWidePhoto, initialCards
} from "./data.js"

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeViaEsc);
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeViaEsc);
    const submitBtn = popup.querySelector(".popup__submitbtn");
    submitBtn ? submitBtn.classList.add("popup__submitbtn_disabled") : "";
}

export function closeViaEsc (evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
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

function closeProfileInfoForm () {
    closePopup(profileInfoForm);
}

function closePhotoAddingForm () {
    closePopup(photoAddingForm);
}

function closeViewingPhotoForm () {
    closePopup(viewingPhotoForm);
}

popups.forEach((item) => {
    item.addEventListener("click", function (evt){
        if(evt.target.classList.contains("popup")) {
            closePopup(item);
        }
    });
});

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

editBtn.addEventListener("click", openProfileInfoForm);
addBtn.addEventListener("click", openPhotoAddingForm);
closedBtnProfile.addEventListener("click", closeProfileInfoForm);
closedBtnPhoto.addEventListener("click", closePhotoAddingForm);
closedBtnWidePhoto.addEventListener("click", closeViewingPhotoForm);
profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);