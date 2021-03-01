export default class Card {
    constructor(cardData, cardTemplateSelector, handleCardImageClick) {
        this._text = cardData.name;
        this._link = cardData.link;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardImageClick = handleCardImageClick;
        this._handleCardImageClick = this._handleCardImageClick.bind(this);
    }
    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector(".card")
            .cloneNode(true);
        return cardTemplate;
    }

    _cardDeleteButtonHandler(e) {
        e.target.closest(".card").remove();
    }

    _cardLikeButtonHandler(e) {
        e.target.classList.toggle("card__like-button_active");
    }

    _setEventListeners() {
        this._cardTemplate
            .querySelector(".card__like-button")
            .addEventListener("click", this._cardLikeButtonHandler);
        this._cardTemplate
            .querySelector(".card__delete-button")
            .addEventListener("click", this._cardDeleteButtonHandler);

        this._cardTemplate
            .querySelector(".card__image")
            .addEventListener("click", () =>
                this._handleCardImageClick({ name: this._text, link: this._link })
            );
    }
    
    generateCard() {
        this._cardTemplate = this._getCardTemplate();
        this._cardTemplate.querySelector(
            ".card__image"
        ).style.backgroundImage = `url('${this._link}')`;
        this._cardTemplate.querySelector(".card__title")
            .textContent = this._text;
        this._setEventListeners();
        return this._cardTemplate;
    }
}