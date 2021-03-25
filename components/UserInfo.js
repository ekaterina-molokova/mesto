import Popup from "../components/Popup.js";

export default class UserInfo extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
    }
    setEventListeners() {
        this._editBtn.addEventListener("click", () => {
            this.open();
        });
    }
}