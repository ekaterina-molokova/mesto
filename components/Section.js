/* import{initialCards} from "../utils/constants.js"; */

export default class Section {
    constructor ({items, renderer}, container){
        this._initialArray = items;
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