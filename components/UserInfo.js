import Popup from "../components/Popup.js";

export default class UserInfo extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
    }

    open(){
        super.open();
    }

    close(){
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._editBtn.addEventListener("click", () => {
            this.open();
        });
    }
}