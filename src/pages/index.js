import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  defaultConfig,
  openImageModal,
  editButton,
  addButton,
  listWrapper,
  cardTemplateSelector,
  editProfileModal,
  addCardModal,
  profileAvatarButton,
  changeAvatarModal,
  deleteCardModal,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-7",
  headers: {
    authorization: "7fda3d54-cdd7-4a60-96d1-9efeeab5176a",
    "Content-Type": "application/json",
  },
});

const popupWithImage = new PopupWithImage(openImageModal);
popupWithImage.setEventListeners();

const deleteFormElement = new PopupWithForm({
  popupSelector: deleteCardModal,
});

deleteFormElement.setEventListeners();

const createCard = (cardItem) => {
  const createNewCard = new Card(
    {
      cardItem,
      handleCardClick: ({ title, link }) => {
        popupWithImage.open(title, link);
      },
      handleDeleteClick: (card) => {
        deleteFormElement.open();
        deleteFormElement.setSubmitAction(() => {
          api
            .deleteCard(card.id())
            .then(() => {
              card.remove();
            })
            .finally(() => deleteFormElement.renderLoading(false));
        });
      },
      handleLikeClick: (LikeButtonActive, cardId, likeCounter) => {
        api.updateLike(LikeButtonActive, cardId).then((result) => {
          likeCounter.textContent = result.likes.length;
        });
      },
    },
    cardTemplateSelector,
    userInfo.getUserInfo().userId
  );
  const cardTemplate = createNewCard.generateCard();
  return cardTemplate;
};

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
  imageSelector: ".profile__avatar",
});
api
  .loadUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    api.getInitialCards().then((result) => {
      const cardList = new Section(
        {
          items: result,
          renderer: (cardItem) => {
            cardList.addItem(createCard(cardItem));
          },
        },
        listWrapper
      );
      cardList.renderItems();
    });
  });

const addFormElement = new PopupWithForm({
  popupSelector: addCardModal,
  submitHandler: (data) => {
    api
      .addCard(data)
      .then((result) => {
        document.querySelector(listWrapper).prepend(createCard(result));
        addFormElement.close();
      })
      .finally(() => addFormElement.renderLoading(false));
  },
});
addFormElement.setEventListeners();
addButton.addEventListener("click", () => {
  addFormElement.open();
});

const avatarFormElement = new PopupWithForm({
  popupSelector: changeAvatarModal,
  submitHandler: (avatar) => {
    avatarFormElement.renderLoading(true);
    api
      .changeAvatar(avatar)
      .then((result) => {
        userInfo.setUserInfo(result.avatar);
        userInfo.getUserInfo();
        avatarFormElement.close();
      })
      .finally(() => avatarFormElement.renderLoading(false));
  },
})
avatarFormElement.setEventListeners();
profileAvatarButton.addEventListener("click", () => {
  avatarFormElement.open();
});

const editFormElement = new PopupWithForm({
  popupSelector: editProfileModal,
  submitHandler: (inputValues) => {
    editFormElement.renderLoading(true);
    api
      .changeUserInfo(inputValues)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .then(() => editFormElement.close())
      .finally(() => editFormElement.renderLoading(false));
  },
});
editFormElement.setEventListeners();
editButton.addEventListener("click", () => {
  editFormElement.open(userInfo.getUserInfo());
});

const formList = Array.from(
  document.querySelectorAll(defaultConfig.formSelector)
);
formList.forEach((formElement) => {
  const formValidate = new FormValidator(defaultConfig, formElement);
  formValidate.enableValidation();
});