const popup = document.querySelector(".popup");
const editBtn = document.querySelector(".profile__editbtn");
const closeBtns = document.querySelectorAll(".popup__closedbtn");
const form = document.querySelector(".popup__container");
const profileInfoForm = document.querySelector(".popup__profileinfo");
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

const likeBtns = document.querySelectorAll(".elements__likebtn");

likeBtns.forEach((item) => {
    item.addEventListener('click', function() {
        item.classList.toggle("elements__likebtn_active");
    });
});

function openPopupProfile() {
    popup.classList.add("popup_opened");
    profileInfoForm.classList.remove("popup__profileinfo");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

closeBtns.forEach((item) => {
    item.addEventListener('click', function(evt){
        evt.preventDefault();
        popup.classList.remove("popup_opened");
    });
})

function submitPopup(evt) {
    evt.preventDefault();           
    console.log(nameInput.value);
    console.log(jobInput.value);
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove("popup_opened");
}

const addBtn = document.querySelector(".profile__addbtn");
const photoadding = document.querySelector(".popup__photoadding");
const placenameInput = document.querySelector(".popup__placename");
const linkInput = document.querySelector(".popup__link");

function openPopupPhoto() {
    popup.classList.add("popup_opened");
    photoadding.classList.remove("popup__photoadding");
    placenameInput.value = placenameInput.placeholder;
    linkInput.value = linkInput.placeholder;
}

const createBtn = document.querySelector(".popup__createbtn");

function addPhoto(evt) {
    evt.preventDefault();
    const placeName = placenameInput.value;
    const linkPhoto = linkInput.value;
    const newPhoto = getItem({name:placeName, link: linkPhoto, alt: placeName});
    elementsContainer.prepend(newPhoto);
}

const deleteBtns = document.querySelectorAll(".elements__deletebtn");

deleteBtns.forEach((item) => {
    item.addEventListener('click', function(event) {
        const targetElement = event.target;
        const targetItem = targetElement.closest(".elements__element");
        targetItem.remove();
    });
});

editBtn.addEventListener('click', openPopupProfile);
form.addEventListener('submit', submitPopup);
addBtn.addEventListener("click", openPopupPhoto);
createBtn.addEventListener("click", addPhoto);