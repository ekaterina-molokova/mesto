import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
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
    }
}