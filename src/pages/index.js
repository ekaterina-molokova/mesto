import {profileInfoForm, photoAddingForm, nameInput, jobInput, editBtn, addBtn, initialCards, validationSelectors} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import active from "../images/active.svg";
import addbtn from "../images/addbtn.svg";
import bin from "../images/Bin.svg";
import closeIcon from "../images/CloseIcon.svg";
import editbtn from "../images/editbtn.svg";
import likebtn from "../images/likebtn.svg";

/*
function createCard (object) {
    const card = new Card(
    object,
    ".template",
    function handleCardClick() {
    viewingPhotoPopup.open(object);
    });
    const cardElement = card.generateCard();
    return cardElement;
} */

const viewingPhotoPopup = new PopupWithImage(".popup_viewing-photo");

const photoAddingPopup = new PopupWithForm(".popup_photo-adding-form",
    function submitForm(formData) {
    const newPhoto = new Card(
        formData,
        ".template",
        function handleCardClick() {
            viewingPhotoPopup.open(formData);
        });
    const newPhotoElement = newPhoto.generateCard();
    cardList.addItem(newPhotoElement);
    photoAddingPopup.close();
});

const user = new UserInfo(".profile__name", ".profile__job");

const userProfilePopup = new PopupWithForm(".popup_profile-info-form",
    function submitForm(formData) {
    user.setUserInfo(formData);
    });

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const card = new Card(item,".template",
                function handleCardClick() {
                    viewingPhotoPopup.open(item);
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
    photoAddingPopup.open();
    addCardFormValidator.resetValidation();
});

editBtn.addEventListener("click", () => {
    userProfilePopup.open();
    profileFormValidator.resetValidation();
    const {name, job} = user.getUserInfo();
    nameInput.value = name;
    jobInput.value = job;
});