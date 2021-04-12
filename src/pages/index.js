import {
    profileInfoForm,
    photoAddingForm,
    nameInput,
    jobInput,
    avatarInput,
    editAvatarBtn,
    editInfoBtn,
    addBtn,
    validationSelectors,
    avatar
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "./index.css";
import active from "../images/active.svg";
import addbtn from "../images/addbtn.svg";
import bin from "../images/Bin.svg";
import closeIcon from "../images/CloseIcon.svg";
import editbtn from "../images/editbtn.svg";
import likebtn from "../images/likebtn.svg";
import Popup from "../components/Popup";

const api = new Api({
    address: "https://mesto.nomoreparties.co",
    token: "71bb88c3-1b7f-415b-b8bb-324cea5ee034",
    groupID: "cohort-22"
});

let ownerID;

api.getOwnerInfo()
    .then((result) => {
        document.querySelector(".profile__name").textContent = result.name;
        document.querySelector(".profile__job").textContent = result.about;
        document.querySelector(".profile__avatar").src = result.avatar;
        ownerID = result._id;
    })
    .catch(error => alert(error));

function createCard (data) {
    const card = new Card (
        {
            data,
            handleCardClick: () => {
                viewingPhotoPopup.open(data);
            },
            handleDelete: ({_id}) => {
                const confirmationPopup = new PopupWithForm(".popup_confirm",
                    function submitForm () {
                        api.deleteCard(card.getId())
                            .then(() => {
                                card.deleteCard();
                            })
                            .catch(error => console.log(error));
                        confirmationPopup.close();
                        confirmationPopup.delete();
                    });
                const form = new Section({
                    renderer: () => {
                        form.addItem(confirmationPopup.generateForm());
                    }
                    }, ".popup_confirm");
                confirmationPopup.open();
            },
            handleLike: ({_id}) => {
                if(card._likeBtn.classList.contains("elements__likebtn_active")) {
                    api.deleteLike(card.getId())
                        .then(() => {
                            card._likeBtn.classList.remove("elements__likebtn_active");
                            likeCounter.textContent = (data.likesCount + 1) - 1;
                        })
                        .catch(error => console.log(error));
                } else {
                    api.putLike(card.getId())
                        .then(() => {
                            card._likeBtn.classList.add("elements__likebtn_active");
                            const likeCounter = card.getLikeCounter();
                            likeCounter.textContent = data.likesCount + 1;
                        })
                        .catch(error => console.log(error));
                }
            },
            handleOwnerID: ({_deleteBtn}) => {
                if(data.ownerID !== ownerID) {
                    _deleteBtn.setAttribute("style", "display: none");
                } else {
                    _deleteBtn.setAttribute("style", "display: flex");
                }
            },
        },
        ".template");
    const cardElement = card.generateCard();
    const likeCounter = card.getLikeCounter();
    likeCounter.textContent = data.likesCount;
    return cardElement;
}

api.getInitialCards()
    .then(cards => {
        cardList.renderItems(cards);
    })
    .catch(error => alert(error));

const cardList = new Section({
        renderer: (item) => {
            cardList.addItem(createCard({...item, _id: item._id, ownerID: item.owner._id, likesCount: item.likes.length}));
        }
    },
    ".elements");

const viewingPhotoPopup = new PopupWithImage(".popup_viewing-photo");

const photoAddingPopup = new PopupWithForm(".popup_photo-adding-form",
    function submitForm(formData) {
    photoAddingPopup.renderLoading(true);
    api.addNewCard({...formData})
        .then(result => {
            cardList.addItem(createCard({...formData, _id: result._id, ownerID: result.owner._id, likesCount: result.likes.length}));
        })
        .catch(error => console.log(error))
        .finally(() => {
            photoAddingPopup.renderLoading(false);
        })
    photoAddingPopup.close();
    });

const user = new UserInfo(".profile__name", ".profile__job");

const userProfilePopup = new PopupWithForm(".popup_profile-info-form",
    function submitForm(formData) {
    userProfilePopup.renderLoading(true);
    api.editProfile(formData)
            .then(result => {
                user.setUserInfo(formData);
            })
        .catch(error => alert(error))
        .finally(() => {
            userProfilePopup.renderLoading(false);
        })
    });

const updateAvatarPopup = new PopupWithForm(".popup_avatar",
    function submitForm(formData) {
        updateAvatarPopup.renderLoading(true);
    api.editAvatar(formData)
        .then(result => {
            avatar.src = formData.avatar;
        })
        .catch(error => alert(error))
        .finally(() => {
            updateAvatarPopup.renderLoading(false);
        })
    });

const profileFormValidator = new FormValidator(validationSelectors, profileInfoForm);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSelectors, photoAddingForm);
addCardFormValidator.enableValidation();

const editAvatarformValidator = new FormValidator(validationSelectors, document.querySelector(".popup_avatar"));
editAvatarformValidator.enableValidation();

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
});

avatar.addEventListener("mouseout", () => {
    editAvatarBtn.setAttribute("style", "display: none");
});

avatar.addEventListener("click", () => {
    updateAvatarPopup.open();
    editAvatarformValidator.resetValidation();
});

editAvatarBtn.addEventListener("click", () => {
    updateAvatarPopup.open();
    editAvatarformValidator.resetValidation();
});