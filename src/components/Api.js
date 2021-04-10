export default class Api {
    constructor({address, token, groupID}) {
        this._address = address;
        this._token = token;
        this._groupID = groupID;
    }

    editAvatar(formData) {
        return fetch(`${this._address}/v1/${this._groupID}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar:document.querySelector(".popup__avatar-link").value
            })
        });
    }

    editProfile(formData) {
        return fetch(`${this._address}/v1/${this._groupID}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                about: formData.job
            })
        });
    }

    getOwnerInfo() {
        return fetch(`${this._address}/v1/${this._groupID}/users/me`,{
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return Promise.reject(`Что-то пошло не так: ${response.status}`);
            });
    }

    getInitialCards() {
        return fetch(`${this._address}/v1/${this._groupID}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(`Что-то пошло не так: ${response.status}`);
        });
    }

    addNewCard(formData) {
        return fetch(`${this._address}/v1/${this._groupID}/cards`,
            {
                method: "POST",
                headers: {
                    authorization: this._token,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    link: formData.link
                })
            })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return Promise.reject(`Что-то пошло не так: ${response.status}`);
            })
    }

    deleteCard(_id) {
        return fetch(`${this._address}/v1/${this._groupID}/cards/${_id}`, {
            method: "DElETE",
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                if(response.ok) {
                    return Promise.resolve("done");
                }
                return Promise.reject(`Что-то пошло не так: ${response.status}`);
            })
    }
}