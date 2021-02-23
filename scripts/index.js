const popups = document.querySelectorAll(".popup");
const Escape = {
    key: "Escape"
};
const profileInfoForm = document.querySelector(".popup_profile-info-form");
const profileTextInputs = profileInfoForm.querySelectorAll("input[type=text]");
const photoAddingForm = document.querySelector(".popup_photo-adding-form");
const photoAddingFormTextInputs = photoAddingForm.querySelectorAll("input[type=text]");
const viewingPhotoForm = document.querySelector(".popup_viewing-photo");
const editBtn = document.querySelector(".profile__editbtn");
const addBtn = document.querySelector(".profile__addbtn");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const placeNameInput = document.querySelector(".popup__placename");
const linkInput = document.querySelector(".popup__link");
const elementsContainer = document.querySelector(".elements");
const templateElement = document.querySelector(".template");
const widePhoto = document.querySelector(".popup__wide-photo");
const widePhotoFigcaption = document.querySelector(".popup__figcaption");
const closedBtnProfile = profileInfoForm.querySelector(".popup__closedbtn");
const closedBtnPhoto = photoAddingForm.querySelector(".popup__closedbtn");
const closedBtnWidePhoto = viewingPhotoForm.querySelector(".popup__closedbtn");
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

function render() {
    const cards = initialCards
        .map(getItem)
    elementsContainer.prepend(...cards);
}

function getItem(item) {
    const newCard = templateElement.content.cloneNode(true);
    const elementTitle = newCard.querySelector(".elements__title");
    elementTitle.textContent = item.name;
    const elementPhoto = newCard.querySelector(".elements__photo");
    elementPhoto.src = item.link;
    elementPhoto.alt = item.alt;
    elementPhoto.name = item.name;
    const elementLikeBtn = newCard.querySelector(".elements__likebtn");
    elementLikeBtn.addEventListener('click', function() {
        elementLikeBtn.classList.toggle("elements__likebtn_active");
    });
    const elementDeleteBtn = newCard.querySelector(".elements__deletebtn");
    elementDeleteBtn.addEventListener('click', function(event) {
        const targetElement = event.target;
        const targetItem = targetElement.closest(".elements__element");
        targetItem.remove();
    });
    elementPhoto.addEventListener("click", function() {
        openViewingPhotoForm ();
        widePhoto.src = item.link;
        widePhoto.alt = item.alt;
        widePhotoFigcaption.textContent = item.name;
    });

    return newCard;
}

render();

function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeViaEsc);
}

function openProfileInfoForm () {
    openPopup(profileInfoForm);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function openPhotoAddingForm () {
    openPopup(photoAddingForm);
    placeNameInput.value = "";
    linkInput.value = "";
}

function openViewingPhotoForm () {
    openPopup(viewingPhotoForm);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeViaEsc);
    const submitBtn = popup.querySelector(".popup__submitbtn");
    submitBtn ? submitBtn.classList.add("popup__submitbtn_disabled") : '';
}

function closeProfileInfoForm () {
    closePopup(profileInfoForm);
}

function closePhotoAddingForm () {
    closePopup(photoAddingForm);
}

function closeViewingPhotoForm () {
    closePopup(viewingPhotoForm);
}

function closeViaEsc (evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

profileTextInputs.forEach((item) => {
   item.addEventListener("keydown", function(evt) {
      if(evt.key === "Enter") {
          submitProfileInfoForm (evt);
      }
   });
});

photoAddingFormTextInputs.forEach((item) => {
    item.addEventListener("keydown", function(evt) {
        if(evt.key === "Enter") {
            addPhoto (evt);
        }
    });
});

popups.forEach((item) => {
    item.addEventListener("click", function (evt){
        if(evt.target.classList.contains("popup")) {
            closePopup(item);
        }
    });
});

function submitPopup (evt) {
    evt.preventDefault();
}

function submitProfileInfoForm (evt) {
    submitPopup (evt);
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeProfileInfoForm ();
}

function addPhoto (evt) {
    submitPopup (evt);
    const newPhoto = getItem({name:placeNameInput.value, link: linkInput.value, alt: placeNameInput.value});
    elementsContainer.prepend(newPhoto);
    closePhotoAddingForm ();
}

editBtn.addEventListener("click", openProfileInfoForm);
addBtn.addEventListener("click", openPhotoAddingForm);
closedBtnProfile.addEventListener("click", closeProfileInfoForm);
closedBtnPhoto.addEventListener("click", closePhotoAddingForm);
closedBtnWidePhoto.addEventListener("click", closeViewingPhotoForm);
profileInfoForm.addEventListener("submit", submitProfileInfoForm);
photoAddingForm.addEventListener("submit", addPhoto);