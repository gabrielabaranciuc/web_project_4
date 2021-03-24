import { myId } from '../utils/constants.js';

export default class Card {
  constructor({ cardItem, handleCardClick, handleDeleteClick, handleLikeClick }, cardTemplateSelector, myId) {
    this._name = cardItem.name;
    this._link = cardItem.link;
    this._likes = cardItem.likes;
    this._cardItem = cardItem;
    this._myId = myId;
    this._userId = this._myId
    this._id = cardItem._id;
    this._ownerId = cardItem.owner._id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardTemplate;
  }

  _setEventListeners() {
    const listItem = this._card 
      .querySelector(".card__delete-button") 
      .closest(".card"); 
      this._card 
      .querySelector(".card__delete-button") 
      .addEventListener("click", () => { 
        this._handleDeleteClick(this._card, this._id);
      });

    this._card
      .querySelector(".card__like-button")
      .addEventListener("click", (e) => {
        const LikeButtonIsActive = this._card
          .querySelector(".card__like-button")
          .classList.contains("card__like-button_active");
        this._handleLikeClick(
          LikeButtonIsActive,
          this._cardItem._id,
          this._card.querySelector(".card__like-counter")
        );
        e.target.classList.toggle("card__like-button_active");
      });

    this._card.querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick({
          title: this._name,
          link: this._link,
        });
      });
  }

  _updateCardView() {
    this._card.querySelector(".card__like-counter").textContent = this._likes.length;
    this._likes.forEach((card) => {
      if (this._userId === card.cardId) {
        this._card
          .querySelector(".card__like-button")
          .classList.toggle("card__like-button_active");
      }
    });
    const newCardDeleteButton = this._card.querySelector('.card__delete-button'); 
    if (this._ownerId !== myId) { 
      newCardDeleteButton.style.display = 'none'; 
    }
  }

  remove() {
    this._card.remove()
  }

  id() {
    return this._id;
  }

  generateCard() {
    this._card = this._getCardTemplate();
    this._card.querySelector(
      ".card__image"
    ).style.backgroundImage = `url('${this._link}')`;
    this._card.querySelector(".card__title")
      .textContent = this._name;
    this._setEventListeners();
    this._updateCardView();
    return this._card;
  }
}