import { openModal } from './index.js';

const modalImage = document.querySelector('.modal__image');
const modalImageCaption = document.querySelector('.modal__image-caption');
const openImageModal = document.querySelector('.modal_type_image');

class Card {
    constructor(name, link, cardTemplateSelector) {
        this._name = name;
        this._link = link;

        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector('.card')
            .cloneNode(true);

        return cardTemplate;
    }

    _cardDeleteButtonHandler(e) {
        e.target.closest(".card").remove();
    }

    _cardLikeButtonHandler(e) {
        e.target.classList.toggle('card__like-button_active');
    }


    _openImageCardHandler() {
        modalImage.src = '';
        modalImage.src = `${this._link}`;
        modalImage.alt = `${this._name}`;
        modalImageCaption.textContent = this._name;
        openModal(openImageModal);
    }

    _setEventListeners() {
        this._card.querySelector('.card__delete-button').addEventListener('click', this._cardDeleteButtonHandler);
        this._card.querySelector('.card__like-button').addEventListener('click', this._cardLikeButtonHandler);
        this._card.querySelector('.card__image').addEventListener('click', (e) => {
            this._openImageCardHandler(e);
        });
    }

    createCard() {
        this._card = this._getCardTemplate();

        this._card.querySelector('.card__image').style.backgroundImage = `url('${this._link}')`;
        this._card.querySelector('.card__title').textContent = this._name;

        this._setEventListeners();

        return this._card;
    }
}

export default Card;