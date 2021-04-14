import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._submit = this._submit.bind(this);
        this._element = this._getTemplate();
    }

    _getTemplate() {
        const formElement = document
            .querySelector(".form-template")
            .content
            .querySelector(".popup__confirmation")
            .cloneNode(true);
        return formElement;
    }

    generateForm() {
        return this._element;
    }

    close(){
        super.close();
        this._popup.removeEventListener("submit", this._submit);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener("submit", this._submit);
    }

    _submit(evt) {
        evt.preventDefault();
        this._submitForm();
    }

    delete() {
        this._element.remove();
    }
}