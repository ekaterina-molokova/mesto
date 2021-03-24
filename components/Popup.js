export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._popupOpened = document.querySelector(".popup_opened");
        this._editBtn = document.querySelector(".profile__editbtn");
        this._addBtn = document.querySelector(".profile__addbtn");
        this.setEventListeners();
    }

    open () {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", () => {
            this._handleEscClose();
        });
    }

    close () {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", () => {
            this._handleEscClose();
        });
    }

    _handleEscClose (evt) {
        if (evt.key === "Escape") {
            this.close(this._popupOpened);
        }
    }

    setEventListeners () {
        this._popup.addEventListener("click", (evt) => {
            if(evt.target.classList.contains("popup")) {
                this.close();
            }
            if(evt.target.classList.contains("popup__closedbtn")) {
                this.close();
            }
        });
        this._editBtn.addEventListener("click", () => {
            this.open();
        });
        this._addBtn.addEventListener("click", () => {
           this.open();
        });
    }
}