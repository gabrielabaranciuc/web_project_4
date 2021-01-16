
const modal = document.querySelector(".modal");
const editForm = document.querySelector(".form");
const editProfileModal = document.querySelector(".modal_type_edit-profile");
const addCardModal = document.querySelector(".modal_type_add-card");


const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");


const closeProfileButton = editProfileModal.querySelector(".modal__reset-button");
const closeCardButton = addCardModal.querySelector(".modal__reset-button");


const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");


const nameInput = editForm.querySelector(".form__input_type_name");
const titleInput = editForm.querySelector(".form__input_type_title");
const cardTitleInput = editForm.querySelector(".form__input_type_card-title");
const urlInput = editForm.querySelector(".form__input_type_url");

function toggleModal(modal) {
  modal.classList.toggle("modal_opened");
}

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent  = nameInput.value;
  profileTitle.textContent  = titleInput.value;

  toggleModal(editProfileModal);
};

editForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", () => {
  if(!editProfileModal.classList.contains(modal)) {
    nameInput.value = profileName.textContent;
    titleInput.value = profileTitle.textContent;
  }
  toggleModal(editProfileModal);
});


closeProfileButton.addEventListener("click",  () => {
  toggleModal(editProfileModal);
}); 

addButton.addEventListener("click", () => {
  toggleModal(addCardModal);
}); 

closeCardButton.addEventListener("click",  () => {
  toggleModal(addCardModal);
}); 

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