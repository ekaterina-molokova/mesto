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
        this._inputSelector = ".popup__field";
        this._inputList = Array.from(this._popup.querySelectorAll(this._inputSelector));
    }

    getUserInfo() {
        return  {name: this._profileName.textContent, job: this._profileJob.textContent};
    }

    setUserInfo({name, job}) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
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