let popup = document.querySelector(".popup");
let editBtn = document.querySelector(".profile__editbtn");
let closeBtn = document.querySelector(".popup__closedbtn");
let form = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup(evt) {
    evt.preventDefault();
    popup.classList.remove("popup_opened");
}

function submitPopup(evt) {
    evt.preventDefault();           
    console.log(nameInput.value);
    console.log(jobInput.value);
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove("popup_opened");
}
editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
form.addEventListener("submit", submitPopup);