export default class Api {
    constructor({address, token, groupID}) {
        this._address = address;
        this._token = token;
        this._groupID = groupID;
    }

    /* Проверка ответа сервера и преобразование из json дублируются во всех методах класса Api,
    cледует вынести в отдельный метод, например, _getResponseData, и переиспользовать */

    deleteLike(_id) {
        return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${_id}`, {
            method: "DElETE",
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                if(response.ok) {
                    return Promise.resolve("done");
                }
                return Promise.reject(new Error(`Ошибка: ${response.status}`));
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
                if(response.ok) {
                    return response.json();
                }
                return Promise.reject(`Что-то пошло не так: ${response.status}`);
            });
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
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return Promise.reject(`Что-то пошло не так: ${response.status}`);
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
                if(response.ok) {
                    return response.json();
                }
                return Promise.reject(`Что-то пошло не так: ${response.status}`);
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
                return Promise.reject(new Error(`Ошибка: ${response.status}`));
            })
    }
}