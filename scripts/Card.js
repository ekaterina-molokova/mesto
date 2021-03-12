import {elementsContainer, initialCards, widePhoto, widePhotoFigcaption, viewingPhotoForm} from "./data.js";
import {openPopup} from "./index.js";
export {Card}

class Card {
    constructor(data, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
        this._alt = data.alt;
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
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".elements__title").textContent = this._name;
        this._element.querySelector(".elements__photo").src = this._link;
        this._element.querySelector(".elements__photo").alt = this._alt;
        this._element.querySelector(".elements__photo").name = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element
        .querySelector(".elements__likebtn")
        .addEventListener("click", () =>
        {
            this._handleLike();
        });
        this._element
        .querySelector(".elements__deletebtn")
        .addEventListener("click", (event) =>
        {
            const targetElement = event.target;
            const targetItem = targetElement.closest(".elements__element");
            targetItem.remove();
        });
        this._element
        .querySelector(".elements__photo")
        .addEventListener("click", () => 
        {
            openPopup(viewingPhotoForm);
            widePhoto.src = this._link;
            widePhoto.alt = this._alt;
            widePhotoFigcaption.textContent = this._name;
        });
    }

    _handleLike() {
        this._element
        .querySelector(".elements__likebtn")
        .classList.toggle("elements__likebtn_active");
    }
}

initialCards.forEach((item) => {
    const card = new Card(item, ".template");
    const cardElement = card.generateCard();
    
    elementsContainer.append(cardElement);
});