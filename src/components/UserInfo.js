export default class UserInfo {
    constructor (profileNameSelector, profileJobSelector, profileAvatarSelector) {
        this._profileNameSelector = profileNameSelector;
        this._profileJobSelector = profileJobSelector;
        this._profileAvatarSelector = profileAvatarSelector;
        this._profileName = document.querySelector(this._profileNameSelector);
        this._profileJob = document.querySelector(this._profileJobSelector);
        this._profileAvatar = document.querySelector(this._profileAvatarSelector);
    }

    getUserInfo(data) {
        return {
            name: data.name,
            about: data.about,
            avatar: data.avatar,
            id: data._id
        };
    }

    setUserInfo({name, about}) {
        this._profileName.textContent = name;
        this._profileJob.textContent = about;
    }

    setUserAvatar (avatar) {
        this._profileAvatar.src = avatar;
    }
}