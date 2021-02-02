const editProfileModal = document.querySelector('.modal_type_edit-profile');
const addCardModal = document.querySelector('.modal_type_add-card');
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

const modalImage = document.querySelector('.modal__image');
const modalImageCaption = document.querySelector('.modal__image-caption');
const cardTitleInput = document.querySelector('.form__input_type_card-title');
const urlInput = document.querySelector('.form__input_type_url');

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const cardsList = document.querySelector('.cards__list');


function toggleModal(card) {
  card.classList.toggle('modal_opened');
}

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const listItem = cardDeleteButton.closest(".card");

  cardImage.style.backgroundImage = `url('${card.link}')`;
  cardTitle.textContent = card.name;


  cardDeleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  cardLikeButton.addEventListener('click', (e) => {
    e.target.classList.toggle('card__like-button_active');
  });

  cardImage.addEventListener('click', () => {
    modalImage.src = `${card.link}`;
    modalImage.alt = `${card.name}`;
    modalImageCaption.textContent = card.name;
    toggleModal(openImageModal);
  });

  return cardElement;
}

function renderCard(card) {
  cardsList.prepend(createCard(card));
}

function editFormSubmitHandler(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;

  toggleModal(editProfileModal);
}

function addFormSubmitHandler(e) {
  e.preventDefault();

  const newCard =
  {
    name: cardTitleInput.value,
    link: urlInput.value
  };
  renderCard(newCard);
  toggleModal(addCardModal);
}

function closeModalEscapeKey(e) {
  const modalEscapeKey = document.querySelector('.modal_opened');
  if (e.key === "Escape" && modalEscapeKey) {
    toggleModal(modalEscapeKey);
  }
  e.target.removeEventListener('keydown', closeModalEscapeKey);
}

function closeModalClickOverlay(e) {
  const modalClick = e.target;
  if (!modalClick.classList.contains('modal_opened')) {
    return;
  }
  toggleModal(modalClick);
  e.target.removeEventListener('click', closeModalClickOverlay);
}

function openModal(modal) {
  modal.classList.add('modal_opened');
  document.addEventListener('keydown', closeModalEscapeKey);
  document.addEventListener('click', closeModalClickOverlay);
}

function closeModal(modal) {
  modal.classList.remove('.modal_opened');
  document.removeEventListener('keydown', closeModalEscapeKey);
  document.removeEventListener('click', closeModalClickOverlay);
}

document.addEventListener('keydown', closeModalEscapeKey);
document.addEventListener('click', closeModalClickOverlay);

editButton.addEventListener('click', () => {
  toggleModal(editProfileModal);
});

closeProfileButton.addEventListener('click', () => {
  toggleModal(editProfileModal);
});

addButton.addEventListener('click', () => {
  toggleModal(addCardModal);
});
closeCardButton.addEventListener('click', () => {
  toggleModal(addCardModal);
});

closeImageButton.addEventListener('click', () => {
  toggleModal(openImageModal);
});

editProfileModal.addEventListener('submit', editFormSubmitHandler);
addCardModal.addEventListener('submit', addFormSubmitHandler);

initialCards.forEach((card) => {
  renderCard(card);
});

