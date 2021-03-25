export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._editBtn = document.querySelector(".profile__editbtn");
        this._addBtn = document.querySelector(".profile__addbtn");
        this.setEventListeners();
    }

    open () {
        this._popup.classList.add("popup_opened");
    }

    close () {
        this._popup.classList.remove("popup_opened");
    }

    /* function closeViaEsc (evt) {
        if (evt.key === "Escape") {
            const openedPopup = document.querySelector(".popup_opened");
            closePopup(openedPopup);
        }
    }
     */

    setEventListeners () {
        this._popup.addEventListener("click", (evt) => {
            if(evt.target.classList.contains("popup")) {
                this.close();
            }
            if(evt.target.classList.contains("popup__closedbtn")) {
                this.close();
            }
        });
    }
}