import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
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
}

/*

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm){
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputSelector = ".popup__field";
        this._inputList = Array.from(this._popup.querySelectorAll(this._inputSelector));
        this._formValues = {};
        this._forms = Array.from(document.forms);
        this._element = this._getTemplate();
        this._submit = this._submit.bind(this);
    }

    close(){
        super.close();
        this._forms.forEach((form) => {
            form.reset();
        });
        this._popup.removeEventListener("submit", this._submit);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener("submit", this._submit);
    }

    _submit(evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    }

    _getInputValues(){
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
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

    delete() {
        this._element.remove();
    }
}

 */