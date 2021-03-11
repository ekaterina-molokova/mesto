import {validationSelectors} from "./data.js";

class FormValidator {
    constructor(validationSelectors, formSelector) {
        this._formSelector = formSelector;
        this._formElement = document.querySelector(this._formSelector);
        console.log(this._formElement);
        this._inputSelector = validationSelectors.inputSelector;
        this._submitButtonSelector = validationSelectors.submitButtonSelector;
        this._inactiveButtonClass = validationSelectors.inactiveButtonClass;
        this._inputErrorClass = validationSelectors.inputErrorClass;
        this._errorClass = validationSelectors.errorClass;
    }
    
    enableValidation (validationSelectors) {
        this._formElement
        .addEventListener("submit", function(evt) {
            evt.preventDefault();
        });
        this._setEventListeners(validationSelectors);
    }

    _setEventListeners (validationSelectors) {
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        const inputList = Array.from(
            this._formElement.querySelectorAll(this._inputSelector)
        );
        inputList.forEach((formInput) => 
        {
            formInput.addEventListener("input", () =>
            {
                this._isValid(formInput, validationSelectors);
                this._toggleButtonState(inputList, buttonElement, validationSelectors);
        });
     });
     this._toggleButtonState(inputList, buttonElement, validationSelectors);
    }
    
    _toggleButtonState (inputList, buttonElement, validationSelectors) {
        if(this._hasInvalidInput(inputList)) {
            buttonElement.setAttribute("disabled", true);
            buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            buttonElement.removeAttribute("disabled");
            buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    _hasInvalidInput (inputList) {
        return inputList.some((formInput) => {
            return !formInput.validity.valid;
        });
    }
    
    _isValid (formInput, validationSelectors) {
        if (!formInput.validity.valid) {
                this._showInputError(formInput, formInput.validationMessage, validationSelectors);
            } else {
                this._hideInputError(formInput, validationSelectors);
            }
    }
    
    _showInputError (formInput, errorMessage, validationSelectors) {
        const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
        formInput.classList.add(this._inputErrorClass);
    }
    
    _hideInputError (formInput, validationSelectors) {
        const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    }
}

const formValidator = new FormValidator(validationSelectors, ".popup__container_type_photo-adding");
formValidator.enableValidation();



