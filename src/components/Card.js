export default class Card {
    constructor({data, handleCardClick, handleDelete, handleLike}, cardSelector) {
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDelete = handleDelete;
        this._handleLike = handleLike;
        this._name = data.name;
        this._link = data.link;
        this._alt = data.alt;
        this._id = data._id;
        this._user = data.user;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(".elements__photo");
        this._cardTitle = this._element.querySelector(".elements__title");
        this._likeBtn = this._element.querySelector(".elements__likebtn");
        this._deleteBtn = this._element.querySelector(".elements__deletebtn");
        this._likeCounter = this._element.querySelector(".elements__counter");
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".elements__element")
            .cloneNode(true);

        return cardElement;
    }

    getId() {
        return this._id;
    }

    getLikeCounter() {
        return this._likeCounter;
    }

    generateCard() {
        this._setEventListeners();
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._alt;
        this._cardImage.name = this._name;

        return this._element;
    }

    deleteCard() {
        this._element.remove();
    }

    _setEventListeners() {
        this._likeBtn.addEventListener("click", () =>
        {
            this._handleLike(this);
        });
        this._deleteBtn.addEventListener("click", () =>
        {
            this._handleDelete(this);
        });
        this._cardImage.addEventListener("click", () =>
        {
            this._handleCardClick();
        });
    }
}