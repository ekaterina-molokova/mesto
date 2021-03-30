export default class Section {
    constructor ({items, renderer}, containerSelector){
        this._initialArray = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
        this._container = document.querySelector(this._containerSelector);
    }

    addItem (element) {
        this._container.prepend(element);
    }

    renderItems () {
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }
}