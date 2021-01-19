const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 

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


function toggleModal (card) {
  card.classList.toggle('modal_opened');
}

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');

  cardImage.style.backgroundImage = `url('${card.link}')`;
  cardTitle.textContent = card.name;

  cardDeleteButton.addEventListener('click', () => {
    const listItem = cardDeleteButton.closest(".card");
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

function editFormSubmitHandler (e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;

  toggleModal(editProfileModal);
}

function addFormSubmitHandler (e) {
  e.preventDefault();

  const newCard =
    {
        name: cardTitleInput.value,
        link: urlInput.value
    };
  renderCard(newCard);
  toggleModal(addCardModal);
}

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