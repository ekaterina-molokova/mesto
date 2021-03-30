import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._widePhoto = document.querySelector(".popup__wide-photo");
        this._widePhotoFigcaption = document.querySelector(".popup__figcaption");
    }
    open(item){
        super.open();
        this._widePhoto.src = item.link;
        this._widePhotoFigcaption.textContent = item.name;
        this._widePhotoFigcaption.alt = item.alt;
    }

    close(){
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}