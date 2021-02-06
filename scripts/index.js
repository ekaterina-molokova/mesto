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
    /* const на кнопку удаления = newItem.querySelector(".#");
    * кнопка удаления.addEventListner("click", handleDelete);  */
    return newItem;
}

render();

const likeBtns = document.querySelectorAll(".elements__likebtn");

likeBtns.forEach((item) => {
    item.addEventListener('click', function() {
        item.classList.toggle("elements__likebtn_active");
    });
});

function openPopup() {
    popup.classList.add("popup_opened");
    form.classList.add("popup__container_opened");
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

/* function handleAdd() {
1) const для value из Input - получить;
2) const для нового фото = getItem({name/link/alt: const для value})
    elementsContainer.prepend(const для нового фото);
    очистить поля;
}

addBtn.addEventlistener('click', handleAdd);

function handleDelete(event) {
const targerElement = event.target;
const targetItem = targerElement.closest(".elements__element");
targerItem.remove();
}

*/

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
form.addEventListener('submit', submitPopup);