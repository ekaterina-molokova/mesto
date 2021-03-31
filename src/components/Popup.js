import {escape} from "../utils/constants.js";
export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this.setEventListeners();
        this._closeViaEsc = this._closeViaEsc.bind(this);
    }

    open () {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", (evt) => {
            this._closeViaEsc(evt);
        });
    }

    close () {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", (evt) => {
            this._closeViaEsc(evt);
        });
    }

    _closeViaEsc (evt) {
        if (evt.key === escape) {
            this.close();
        }
    }

    setEventListeners () {
        this._popup.addEventListener("mousedown", (evt) => {
            if(evt.target.classList.contains("popup")) {
                this.close();
            }
            if(evt.target.classList.contains("popup__closedbtn")) {
                this.close();
            }
        });
    }
}