import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  defaultConfig,
  openImageModal,
  editButton,
  addButton,
  listWrapper,
  cardTemplateSelector,
  editProfileModal,
  addCardModal,
} from "../utils/constants.js";

const popupWithImage = new PopupWithImage(openImageModal);
popupWithImage.setEventListeners();
const createCard = (cardItem) => {
  const createNewCard = new Card(
    {
      cardItem,
      handleCardClick: ({ name, link }) => {
        popupWithImage.open(name, link);
      },
    },
    cardTemplateSelector
  );

  const cardTemplate = createNewCard.generateCard();
  return cardTemplate;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      cardList.addItem(createCard(cardItem));
    },
  },
  listWrapper
);
cardList.renderItems();

const addFormElement = new PopupWithForm({
  popupSelector: addCardModal,
  submitHandler: (cardItem) => {
    document.querySelector(".cards__list").prepend(createCard(cardItem));
  },
});
addFormElement.setEventListeners();
addButton.addEventListener('click', () => {
  addFormElement.open();
});

const editFormElement = new PopupWithForm({
  popupSelector: editProfileModal,
  submitHandler: (cardItem) => {
    const infoUser = new UserInfo(cardItem);
    infoUser.setUserInfo();
  },
});
editFormElement.setEventListeners();
editButton.addEventListener('click', () => {
  editFormElement.open();
});

const formList = Array.from(
  document.querySelectorAll(defaultConfig.formSelector)
);
formList.forEach((formElement) => {
  const formValidate = new FormValidator(defaultConfig, formElement);
  formValidate.enableValidation();
});