export default class Card {
    constructor(name, link, cardTemplateSelector, handleCardClick) {
        this._text = name;
        this._link = link;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardImageClick = handleCardClick;
        this._handleCardImageClick = this._handleCardImageClick.bind(this);
    }
    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector(".card")
            .cloneNode(true);
        this._placeTemp = cardTemplate;
        this._imageTemp = cardTemplate.querySelector(".card__image");
        this._nameTemp = cardTemplate.querySelector(".card__title");
        this._likeButtonTemp = cardTemplate.querySelector(".card__like-button");
        this._deleteButtonTemp = cardTemplate.querySelector(".card__delete-button");
        return cardTemplate;
    }

    _addContent() {
        this._imageTemp.style.backgroundImage = `url(${this._link})`;
        this._nameTemp.textContent = this._text;
    }

    _cardDeleteButtonHandler(e) {
        e.target.closest(".card").remove();
    }

    _cardLikeButtonHandler(e) {
        e.target.classList.toggle("card__like-button_active");
    }

    _setEventListeners() {
        this._likeButtonTemp
            .addEventListener("click", this._cardLikeButtonHandler);
        this._deleteButtonTemp
            .addEventListener("click", this._cardDeleteButtonHandler);

        this._imageTemp
            .addEventListener("click", () =>
                this._handleCardImageClick(this._text, this._link)
            );
    }

    generateCard() {
        const card = this._getCardTemplate();
        this._addContent();
        this._setEventListeners();
        return card;
    }
}