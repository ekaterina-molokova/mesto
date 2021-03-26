import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm){
        super(popupSelector);
        this._submitForm = submitForm;
    }
    open(){
        super.open();
    }
    close(){
        super.close();
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._addBtn.addEventListener("click", () => {
            this.open();
        });
        this._popup.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close();
        });
    }

    _getInputValues(){
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._formValues = {};
        this._inputList.forEach(input => {
           this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

}