const NameInputError = profileInfoForm.querySelector(`#${nameInput.id}-error`);
const JobInputError = profileInfoForm.querySelector(`#${jobInput.id}-error`);
const PlaceNameInputError = photoAddingForm.querySelector(`#${placeNameInput.id}-error`);
const LinkInputError = photoAddingForm.querySelector(`#${linkInput.id}-error`);

profileInfoForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

photoAddingForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

nameInput.addEventListener("input", function (evt) {
    console.log(evt.target.validity.valid);
});

jobInput.addEventListener("input", function (evt) {
    console.log(evt.target.validity.valid);
});

placeNameInput.addEventListener("input", function (evt) {
    console.log(evt.target.validity.valid);
});

linkInput.addEventListener("input", function (evt) {
    console.log(evt.target.validity.valid);
});

const showInputError = (element) => {
    element.classList.add("popup__field_type_error");
}

const hideInputError = (element) => {
    element.classList.remove("popup__field_type_error");
}

const isValid = () => {
    if (!nameInput.validity.valid) {
        showInputError(nameInput);
        NameInputError.classList.add("popup__input-error-message_active");

    } else {
        hideInputError(nameInput);
        NameInputError.classList.remove("popup__input-error-message_active");
    }

    if (!jobInput.validity.valid) {
        showInputError(jobInput);
        JobInputError.classList.add("popup__input-error-message_active");
    } else {
        hideInputError(jobInput);
        JobInputError.classList.remove("popup__input-error-message_active");
    }

    if (!placeNameInput.validity.valid) {
        showInputError(placeNameInput);
        PlaceNameInputError.classList.add("popup__input-error-message_active");
    } else {
        hideInputError(placeNameInput);
        PlaceNameInputError.classList.remove("popup__input-error-message_active");
    }

    if (!linkInput.validity.valid) {
        showInputError(linkInput);
        LinkInputError.classList.add("popup__input-error-message_active");
    } else {
        hideInputError(linkInput);
        LinkInputError.classList.remove("popup__input-error-message_active");
    }
}

nameInput.addEventListener("input", isValid);
jobInput.addEventListener("input", isValid);
placeNameInput.addEventListener("input", isValid);
linkInput.addEventListener("input", isValid);


/*

enableValidation ({
    formSelector: ".popup__container",
    formFieldsetSelector: ".popup__fields",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submitbtn",
    inactiveButtonClass: "popup__submitbtn_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__input-error-message_active"
});

 */