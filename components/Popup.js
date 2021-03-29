export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this.setEventListeners();
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
        if (evt.key === "Escape") {
            this.close();
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
    }
}