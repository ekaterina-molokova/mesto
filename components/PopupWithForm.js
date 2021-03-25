import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector){
        super(popupSelector);
    }

    setEventListeners(){
        this._addBtn.addEventListener("click", () => {
            this.open();
        });
    }
}