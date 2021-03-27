import {profileInfoForm, photoAddingForm, profileName, profileJob, editBtn, addBtn,
    nameInput, jobInput, placeNameInput, linkInput, elementsContainer, initialCards, validationSelectors} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const ViewingPhotoPopup = new PopupWithImage(".popup_viewing-photo");

const PhotoAddingPopup = new PopupWithForm(".popup_photo-adding-form",
    function submitForm(formData) {
    const newPhoto = new Card(
        formData,
        ".template",
        function handleCardClick() {
            ViewingPhotoPopup.open();
        });
    const newPhotoElement = newPhoto.generateCard();
    cardList.addItem(newPhotoElement);
    PhotoAddingPopup.close();
});

const UserProfilePopup = new PopupWithForm(".popup_profile-info-form",
    function submitForm() {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    UserProfilePopup.close();
    });

const UserProfile = new UserInfo(".popup_profile-info-form");

const cardList = new Section({
        data: initialCards,
        renderer: (item) => {
            const card = new Card(item,".template",
                function handleCardClick() {
                    ViewingPhotoPopup.open(item);
                });
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        }
    },
    elementsContainer);
cardList.renderItems();

const profileFormValidator = new FormValidator(validationSelectors, profileInfoForm);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSelectors, photoAddingForm);
addCardFormValidator.enableValidation();

/*
function openProfileInfoForm () {
    openPopup(profileInfoForm);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    profileFormValidator.resetValidation();
}

function openPhotoAddingForm () {
    openPopup(photoAddingForm);
    placeNameInput.value = "";
    linkInput.value = "";
    addCardFormValidator.resetValidation();
}

function addPhoto (evt) {
    preventSubmit (evt);
    const newPhoto = {name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value};
    createCard (newPhoto);
    elementsContainer.prepend(createCard (newPhoto));
    closePopup (photoAddingForm);
}

profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);

 */