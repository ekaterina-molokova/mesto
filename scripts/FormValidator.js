import {validationSelectors, popups} from "./data.js";

class FormValidator {
    constructor(validationSelectors, formElement) {
        this._formElement = formElement;
        this._inputSelector = validationSelectors.inputSelector;
        this._submitButtonSelector = validationSelectors.submitButtonSelector;
        this._inactiveButtonClass = validationSelectors.inactiveButtonClass;
        this._inputErrorClass = validationSelectors.inputErrorClass;
        this._errorClass = validationSelectors.errorClass;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }
    
    enableValidation () {
        this._formElement.addEventListener("submit", function(evt) {
            evt.preventDefault();
        });

        this._setEventListeners();
    }

    _setEventListeners () {
        this._inputList.forEach((formInput) => 
        {
            formInput.addEventListener("input", () =>
            {
                this._isValid(formInput);
                this._toggleButtonState();
        });
     });
     this._toggleButtonState();
    }
    
    _toggleButtonState () {
        if(this._hasInvalidInput()) {
            this._buttonElement.setAttribute("disabled", true);
            this._buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    _hasInvalidInput () {
        return this._inputList.some((formInput) => {
            return !formInput.validity.valid;
        });
    }
    
    _isValid (formInput) {
        if (!formInput.validity.valid) {
                this._showInputError(formInput, formInput.validationMessage);
            } else {
                this._hideInputError(formInput);
            }
    }
    
    _showInputError (formInput, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
        formInput.classList.add(this._inputErrorClass);
    }
    
    _hideInputError (formInput) {
        const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    }
}

Array.from(document.querySelectorAll('.popup__container')).forEach((formElement) => {
    const formValidator = new FormValidator(validationSelectors, formElement);
    const validForm = formValidator.enableValidation();
});


