import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, targetItem, submitForm){
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputSelector = ".popup__field";
        this._inputList = Array.from(this._popup.querySelectorAll(this._inputSelector));
        this._formValues = {};
        this._forms = Array.from(document.forms);
        this._targetItem = targetItem;
    }
    close(){
        super.close();
        this._forms.forEach((form) => {
            form.reset();
        });
    }
    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close();
        });
    }
    _getInputValues(){
        this._inputList.forEach(input => {
           this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
}