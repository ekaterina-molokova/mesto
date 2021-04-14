export default class Api {
    constructor({address, token, groupID}) {
        this._address = address;
        this._token = token;
        this._groupID = groupID;
    }

    _getResponseData (response) {
        if(response.ok) {
            return Promise.resolve("done");
        }
        return Promise.reject(new Error(`Ошибка: ${response.status}`));
    }

    _getResponseJson (response) {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject(new Error(`Ошибка: ${response.status}`));
    }

    deleteLike(_id) {
        return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${_id}`, {
            method: "DElETE",
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                this._getResponseData(response);
            })
    }

    putLike(_id) {
        return fetch (`${this._address}/v1/${this._groupID}/cards/likes/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                this._getResponseJson(response);
            });
    }

    editAvatar({avatar}) {
        return fetch(`${this._address}/v1/${this._groupID}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
        avatar: {avatar}
            })
        })
            .then(response => {
                this._getResponseJson(response);
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
        })
            .then(response => {
                this._getResponseJson(response);
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
                return Promise.reject(new Error(`Ошибка: ${response.status}`));
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
                return Promise.reject(new Error(`Ошибка: ${response.status}`));
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
                return Promise.reject(new Error(`Ошибка: ${response.status}`));
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
                this._getResponseData(response);
            })
    }
}