import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  editButton,
  addButton,
  inputName,
  inputTitle,
  editProfileModal,
  addCardModal,
  config,
  initialCards
} from "../utils/constants.js";

const editProfileValidator = new FormValidator(config, editProfileModal);
const addCardValidator = new FormValidator(config, addCardModal);
editProfileValidator.enableValidation();
addCardValidator.enableValidation();

function createCard(cardData) {
  const newCard = new Card(cardData, ".card-template", (link, text) => {
    imagePopup.open(cardData.link, cardData.name);
  });
  const cardTemplate = newCard.generateCard();
  return cardTemplate;
}

const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardTemplate = createCard(item);
      initialCardList.addItem(cardTemplate);
    },
  },
  ".cards__list"
);
initialCardList.renderItems();

const imagePopup = new PopupWithImage(".modal_type_image");
imagePopup.setEventListeners();
const addCardPopup = new PopupWithForm(".modal_type_add-card", (values) => {
  const cardData = { name: values.cardTitle, link: values.imageLink };
  const card = createCard(cardData);
  initialCardList.addItem(card);
  addCardPopup.close();
});
addCardPopup.setEventListeners();
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