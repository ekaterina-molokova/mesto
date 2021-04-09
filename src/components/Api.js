export default class Api {
    constructor({address, token, groupID}) {
        this._address = address;
        this._token = token;
        this._groupID = groupID;
    }

    getInitialCards() {
        return fetch(`${this._address}/v1/${this._groupID}/cards`, {
            headers: {
                authorization: this._token
            }
        }).then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(`Что-то пошло не так: ${response.status}`);
        });
    }
}