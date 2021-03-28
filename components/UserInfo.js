import Popup from "../components/Popup.js";

export default class UserInfo extends Popup {
    constructor (popupSelector, nameSelector, jobSelector) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
        this._nameInput = document.querySelector(this._nameSelector);
        this._jobInput = document.querySelector(this._jobSelector);
        this._profileName = document.querySelector(".profile__name");;
        this._profileJob = document.querySelector(".profile__job");
        this._userFormValues = {};
    }

    getUserInfo() {
    }


    setUserInfo(){
        this._nameInput.value = this._profileName.textContent;
        this._jobInput.value = this._profileJob.textContent;
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