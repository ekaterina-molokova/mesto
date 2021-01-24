let popup = document.querySelector(".popup");
let editBtn = document.querySelector(".profile__editbtn");
let closeBtn = document.querySelector(".popup_closed");
let form = document.querySelector('form');
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

function openPopup() {
    popup.classList.add("popup_opened");
}

editBtn.addEventListener('click', openPopup);
openPopup();

function closePopup() {
    popup.classList.remove("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

closeBtn.addEventListener('click', closePopup);
closePopup();

function submitPopup(evt) {
    evt.preventDefault();
    console.log(nameInput.value);
    console.log(jobInput.value);
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove("popup_opened");
}

form.addEventListener('submit', submitPopup);