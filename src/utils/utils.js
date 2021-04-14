export default function renderLoading(isLoading, popupSelector) {
    const popup = document.querySelector(popupSelector);
    const submitButton = popup.querySelector(".popup__submitbtn");
    if (isLoading) {
        submitButton.textContent = "Подождите...";
    } else {
        submitButton.textContent = submitButton.value;
    }
}