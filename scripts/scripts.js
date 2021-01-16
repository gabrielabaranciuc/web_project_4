
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__reset-button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');

const nameInput = document.querySelector('.form__input_type_name');
const titleInput = document.querySelector('.form__input_type_title');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');

function openModal () {
    nameInput.value = profileName.textContent;
    titleInput.value = profileTitle.textContent;
    modal.classList.add('modal_opened');
}

function closeModal () {
    modal.classList.remove('modal_opened');
}

function formSubmitHandler(e) {
    e.preventDefault();

    profileName.textContent  = nameInput.value;
    profileTitle.textContent  = titleInput.value;
    
    modal.classList.remove('modal_opened');
}

editButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

form.addEventListener('submit', formSubmitHandler);

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

  const cardTemplate = document.querySelector(".card-template").content.querySelector(".card");
  const cardsList = document.querySelector(".cards__list");

  function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    const cardDeleteButton = cardElement.querySelector(".card__delete-button");

    cardTitle.textContent = card.name;
    cardImage.style.backgroundImage = "url(" + card.link +")";
    

    return cardElement;
  }
  
  
  initialCards.forEach((card) => {
    cardsList.prepend(createCard(card));
  });