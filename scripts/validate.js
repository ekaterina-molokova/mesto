const showInputError = (formElement, formInput, errorMessage, validationSelectors) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSelectors.errorClass);
    formInput.classList.add(validationSelectors.inputErrorClass);
}

const hideInputError = (formElement, formInput, validationSelectors) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove(validationSelectors.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(validationSelectors.errorClass);
}

const isValid = (formElement, formInput, validationSelectors) => {
    if (!formInput.validity.valid) {
            showInputError(formElement, formInput, formInput.validationMessage, validationSelectors);
        } else {
            hideInputError(formElement, formInput, validationSelectors);
        }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
       return !formInput.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement, validationSelectors) => {
    if(hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(validationSelectors.inactiveButtonClass);
    } else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove(validationSelectors.inactiveButtonClass);
    }
}

const setEventListeners = (formElement, inputSelector, validationSelectors) => {
    const formInputs = formElement.querySelectorAll(inputSelector);
    const inputList = Array.from(formInputs);
    const buttonElement = formElement.querySelector(validationSelectors.submitButtonSelector);
    inputList.forEach((formInput) => {
        formInput.addEventListener("input", () => {
            isValid(formElement, formInput, validationSelectors);
            toggleButtonState(inputList, buttonElement, validationSelectors);
        });
    });
    toggleButtonState(inputList, buttonElement, validationSelectors);
}

const enableValidation = ({formSelector, inputSelector}) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", function(evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, inputSelector, validationSelectors);
    });
}

const validationSelectors = {
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submitbtn",
    inactiveButtonClass: "popup__submitbtn_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__input-error-message_active"
}

enableValidation(validationSelectors);