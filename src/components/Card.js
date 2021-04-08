import {confirmPopup} from "../pages/index.js";
import PopupWithForm from "./PopupWithForm";

export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._name = data.name;
        this._link = data.link;
        this._alt = data.alt;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(".elements__photo");
        this._cardTitle = this._element.querySelector(".elements__title");
        this._likeBtn = this._element.querySelector(".elements__likebtn");
        this._deleteBtn = this._element.querySelector(".elements__deletebtn");
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".elements__element")
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._setEventListeners();
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._alt;
        this._cardImage.name = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._likeBtn.addEventListener("click", () =>
        {
            this._handleLike();
        });
        this._deleteBtn.addEventListener("click", (event) =>
        {
            const targetElement = event.target;
            console.log(targetElement);
            const targetItem = targetElement.closest(".elements__element");
            console.log(targetItem);
            const confirmPopup = new PopupWithForm(".popup_confirm", targetItem,
                function submitForm() {
                targetItem.remove();
                });
            confirmPopup.open();
        });
        this._cardImage.addEventListener("click", () =>
        {
            this._handleCardClick();
        });
    }

    _handleLike() {
        this._likeBtn.classList.toggle("elements__likebtn_active");
    }
}