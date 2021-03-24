import {Card} from "./Card.js";
import {handleCardClick} from "../pages/index.js";

export class Section {
    constructor ({data, renderer}, container){
        this._initialArray = data;
        this._renderer = renderer;
        this._container = container;
    }

    addItem (cardElement) {
        this._container.append(cardElement);
    }

    renderItems () {
        this._initialArray.forEach((item) => {
            const card = new Card(item, ".template", handleCardClick);
            const cardElement = card.generateCard();
            this.addItem(cardElement);
        });
        /* this._initialArray.forEach(item => this._renderer(item)); */
    }
}