import {profileInfoForm, photoAddingForm, nameInput, jobInput, editBtn, addBtn, initialCards, validationSelectors} from "../utils/constants.js";
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
            ViewingPhotoPopup.open(formData);
        });
    const newPhotoElement = newPhoto.generateCard();
    cardList.addItem(newPhotoElement);
    PhotoAddingPopup.close();
});

const User = new UserInfo(".popup_photo-adding-form", ".profile__name", ".profile__job");

const UserProfilePopup = new PopupWithForm(".popup_profile-info-form",
    function submitForm(formData) {
    User.setUserInfo(formData);
    });

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const card = new Card(item,".template",
                function handleCardClick() {
                    ViewingPhotoPopup.open(item);
                });
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        }
    },
    ".elements");
cardList.renderItems();

const profileFormValidator = new FormValidator(validationSelectors, profileInfoForm);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSelectors, photoAddingForm);
addCardFormValidator.enableValidation();

addBtn.addEventListener("click", () => {
    PhotoAddingPopup.open();
    addCardFormValidator.resetValidation();
});

editBtn.addEventListener("click", () => {
    UserProfilePopup.open();
    profileFormValidator.resetValidation();
    const {name, job} = User.getUserInfo();
    nameInput.value = name;
    jobInput.value = job;
});