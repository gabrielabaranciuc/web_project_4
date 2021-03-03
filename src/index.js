import "./pages/index.css"; 

import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";

import {
  editButton,
  addButton,
  inputName,
  inputTitle,
  editProfileModal,
  addCardModal,
  cardTemplateSelector,
  config,
  initialCards,
} from "./utils/constants.js";

const editProfileValidator = new FormValidator(config, editProfileModal);
const addCardValidator = new FormValidator(config, addCardModal);
editProfileValidator.enableValidation();
addCardValidator.enableValidation();

export default function handleCardImageClick(cardTitle, imageLink) {
  imagePopup.open(cardTitle, imageLink);
}


const cardTemplates = [];
for (const card of initialCards) {
  let cardTemp = new Card(card.name, card.link, cardTemplateSelector, handleCardImageClick);
  cardTemp = cardTemp.generateCard();
  cardTemplates.push(cardTemp);
}

const initialCardList = new Section(
  {
    items: cardTemplates,
    renderer: (element) => {
      initialCardList.addItem(element);
    },
  },
  ".cards__list"
);
initialCardList.renderItems();

const imagePopup = new PopupWithImage(".modal_type_image");
imagePopup.setEventListeners();


const addCardPopup = new PopupWithForm(".modal_type_add-card", addFormSubmitHandler);
addCardPopup.setEventListeners();

function addFormSubmitHandler(inputValues, e, selector) {
  e.preventDefault();
  let newCard = new Card(
    inputValues.cardTitle,
    inputValues.imageLink,
    selector,
    handleCardImageClick
  );
  newCard = newCard.generateCard();
  initialCardList.addItem(newCard);
  addCardPopup.close();
}

addButton.addEventListener("click", () => {
  addCardPopup.open();
});

const editProfilePopup = new PopupWithForm(".modal_type_edit-profile", () => {
  userInfo.setUserInfo({ name: inputName.value, title: inputTitle.value });
  editProfilePopup.close();
});
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__title",
});
editProfilePopup.setEventListeners();
editButton.addEventListener("click", () => {
  const { name, title } = userInfo.getUserInfo();
  inputName.value = name;
  inputTitle.value = title;
  editProfilePopup.open();
});