const showInputError = (formElement, formInput, errorMessage) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error-message_active");
    formInput.classList.add("popup__field_type_error");
}

const hideInputError = (formElement, formInput) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove("popup__field_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__input-error-message_active");
}

const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
            showInputError(formElement, formInput, formInput.validationMessage);
        } else {
            hideInputError(formElement, formInput);
        }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
       return !formInput.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement) => {
    if(hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add("popup__submitbtn_disabled");
    } else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove("popup__submitbtn_disabled");
    }
}

const setEventListeners = (formElement, inputSelector) => {
    const formInputs = formElement.querySelectorAll(inputSelector);
    const inputList = Array.from(formInputs);
    const buttonElement = formElement.querySelector(".popup__submitbtn");
    inputList.forEach((formInput) => {
        formInput.addEventListener("input", () => {
            isValid(formElement, formInput);
            toggleButtonState(inputList, buttonElement);
        });
    });
    toggleButtonState(inputList, buttonElement);
}

const enableValidation = ({formSelector, inputSelector}) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", function(evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, inputSelector);
    });
}

enableValidation ({
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submitbtn",
    inactiveButtonClass: "popup__submitbtn_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__input-error-message_active"
});