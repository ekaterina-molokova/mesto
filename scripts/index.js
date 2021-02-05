const popup = document.querySelector(".popup");
const editBtn = document.querySelector(".profile__editbtn");
const closeBtn = document.querySelector(".popup__closedbtn");
const form = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
];

const elementsContainer = document.querySelector(".elements");
const templateElement = document.querySelector(".template");

function render() {
    const html = initialCards
        .map(getItem)
    elementsContainer.prepend(...html);
};

function getItem(item) {
    const newItem = templateElement.content.cloneNode(true);
    const elementTitle = newItem.querySelector(".elements__title");
    elementTitle.textContent = item.name;
    const elementPhoto = newItem.querySelector(".elements__photo");
    elementPhoto.src = item.link;
    elementPhoto.alt = item.alt;
    return newItem;
}

render();

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