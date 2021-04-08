import {
    profileInfoForm,
    photoAddingForm,
    nameInput,
    jobInput,
    avatarInput,
    editAvatarBtn,
    editInfoBtn,
    addBtn,
    initialCards,
    validationSelectors,
    avatar
} from "../utils/constants.js";
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
import Popup from "../components/Popup";

function createCard (object) {
    const card = new Card(
    object,
    ".template",
    function handleCardClick() {
    viewingPhotoPopup.open(object);
    });
    const cardElement = card.generateCard();
    return cardElement;
}

const viewingPhotoPopup = new PopupWithImage(".popup_viewing-photo");

const photoAddingPopup = new PopupWithForm(".popup_photo-adding-form",
    function submitForm(formData) {
        cardList.addItem(createCard(formData));
        photoAddingPopup.close();
    });

const user = new UserInfo(".profile__name", ".profile__job");

const userProfilePopup = new PopupWithForm(".popup_profile-info-form",
    function submitForm(formData) {
    user.setUserInfo(formData);
    });

const updateAvatarPopup = new PopupWithForm(".popup_avatar",
    function submitForm() {
    avatar.src = avatarInput.value;
    });

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            cardList.addItem(createCard(item));
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

editInfoBtn.addEventListener("click", () => {
        userProfilePopup.open();
        profileFormValidator.resetValidation();
        const {name, job} = user.getUserInfo();
        nameInput.value = name;
        jobInput.value = job;
});

avatar.addEventListener("mouseover", () => {
    editAvatarBtn.setAttribute("style", "display: flex");
    avatar.setAttribute("style", "opacity: 0.2");
    avatar.setAttribute("style", "background-color: #C4C4C4");
});

avatar.addEventListener("mouseout", () => {
    editAvatarBtn.setAttribute("style", "display: none");
    avatar.setAttribute("style", "opacity: none");
    avatar.setAttribute("style", "background-color: transparent");
});

avatar.addEventListener("click", () => {
    updateAvatarPopup.open();
});

/*
const deleteBtns = document.querySelectorAll(".elements__deletebtn");

deleteBtns.forEach((button) => {
   button.addEventListener("click", () => {
       confirmPopup.open();
   });
}); */