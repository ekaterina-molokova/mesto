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
        console.log(this._initialArray);
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }
}