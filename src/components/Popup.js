import {escape} from "../utils/constants.js";
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._closeViaEsc = this._closeViaEsc.bind(this);
        this._submitBtn = this._popup.querySelector(".popup__submitbtn");
    }

    open() {
        this._popup.classList.add("popup_opened");
        this.setEventListeners();
        document.addEventListener("keydown", this._closeViaEsc);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._closeViaEsc);
    }

    _closeViaEsc(evt) {
        if (evt.key === escape) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup")) {
                this.close();
            }
        });
        this._popup.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("popup__closedbtn")) {
                this.close();
            }
        });
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.textContent = "Сохранение";
        } else {
            this._submitBtn.textContent = this._submitBtn.value;
        }
    }
}