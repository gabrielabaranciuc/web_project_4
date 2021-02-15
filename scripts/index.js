import { initialCards } from './initialCards.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible"
}

const editProfileModal = document.querySelector('.modal_type_edit-profile');
const addCardModal = document.querySelector('.modal_type_add-card');

const editFormValidator = new FormValidator(defaultConfig, editProfileModal);
const addFormValidator = new FormValidator(defaultConfig, addCardModal);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const openImageModal = document.querySelector('.modal_type_image');

const editButton = document.querySelector('.profile__edit-button');
const closeProfileButton = editProfileModal.querySelector('.modal__reset-button');

const addButton = document.querySelector('.profile__add-button');
const closeCardButton = addCardModal.querySelector('.modal__reset-button');

const closeImageButton = openImageModal.querySelector('.modal__reset-button');

const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const nameInput = document.querySelector('.form__input_type_name');
const titleInput = document.querySelector('.form__input_type_title');

const cardTitleInput = document.querySelector('.form__input_type_card-title');
const urlInput = document.querySelector('.form__input_type_url');

const cardsList = document.querySelector('.cards__list');

editButton.addEventListener('click', () => {
  openModal(editProfileModal);
});

closeProfileButton.addEventListener('click', () => {
  closeModal(editProfileModal);
});

addButton.addEventListener('click', () => {
  openModal(addCardModal);
});
closeCardButton.addEventListener('click', () => {
  closeModal(addCardModal);
});

closeImageButton.addEventListener('click', () => {
  closeModal(openImageModal);
});

editProfileModal.addEventListener('submit', editFormSubmitHandler);
addCardModal.addEventListener('submit', addFormSubmitHandler);

initialCards.forEach((card) => {
  renderCard(card.name, card.link);
});


function openModal(modal) {
  modal.classList.add('modal_opened');
  document.addEventListener('keydown', closeModalEscapeKey);
  document.addEventListener('click', closeModalClickOverlay);
}

function closeModal(modal) {
  modal.classList.remove('modal_opened');
  document.removeEventListener('keydown', closeModalEscapeKey);
  document.removeEventListener('click', closeModalClickOverlay);
}

function renderCard(name, link) {
  const card = new Card(name, link, '.card-template');
  cardsList.prepend(card.createCard());
}

function editFormSubmitHandler(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;

  closeModal(editProfileModal);
}

function addFormSubmitHandler(e) {
  e.preventDefault();

  const newCard =
  {
    name: cardTitleInput.value,
    link: urlInput.value
  };
  renderCard(newCard.name, newCard.link);
  closeModal(addCardModal);
}

function closeModalEscapeKey(e) {
  const modalEscapeKey = document.querySelector('.modal_opened');
  if (e.key === "Escape" && modalEscapeKey) {
    closeModal(modalEscapeKey);
  }
}

function closeModalClickOverlay(e) {
  const modalClick = e.target;
  if (!modalClick.classList.contains('modal_opened')) {
    return;
  }
  closeModal(modalClick);
}

export { openModal };