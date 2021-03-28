import Popup from "../components/Popup.js";

export default class UserInfo extends Popup {
    constructor (popupSelector, profileNameSelector, profileJobSelector) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._profileNameSelector = profileNameSelector;
        this._profileJobSelector = profileJobSelector;
        this._profileName = document.querySelector(this._profileNameSelector);
        this._profileJob = document.querySelector(this._profileJobSelector);
        this._nameInput = document.querySelector(".popup__name");
        this._jobInput = document.querySelector(".popup__job");
    }

    getUserInfo() {
    }

    setUserInfo(){
    }


    open(){
        super.open();
    }

    close(){
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}