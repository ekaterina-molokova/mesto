export default class Section {
    constructor ({renderer}, containerSelector){
        this._renderer = renderer;
        this._containerSelector = containerSelector;
        this._container = document.querySelector(this._containerSelector);
    }

    addItem (element) {
        this._container.prepend(element);
    }

    renderItems (cards) {
        cards.forEach((card) => {
            this._renderer(card);
        });
    }
}