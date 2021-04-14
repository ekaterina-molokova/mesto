export default class UserInfo {
    constructor (profileNameSelector, profileJobSelector, profileAvatarSelector) {
        this._profileNameSelector = profileNameSelector;
        this._profileJobSelector = profileJobSelector;
        this._profileAvatarSelector = profileAvatarSelector;
        this._profileName = document.querySelector(this._profileNameSelector);
        this._profileJob = document.querySelector(this._profileJobSelector);
        this._profileAvatar = document.querySelector(this._profileAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent,
            avatar: this._profileAvatar.src
        };
    }

    setUserInfo({name, job}) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    }
}