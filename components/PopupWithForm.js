import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm){
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputSelector = ".popup__field";
        this._inputList = Array.from(this._popup.querySelectorAll(this._inputSelector));
        this._formValues = {};
    }
    open(){
        super.open();
    }
    close(){
        super.close();
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