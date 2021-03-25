export default class Section {
    constructor ({initialCards, renderer}, container){
        this._initialArray = initialCards;
        this._renderer = renderer;
        this._container = container;
    }

    addItem (element) {
        this._container.append(element);
    }

    renderItems () {
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }
}