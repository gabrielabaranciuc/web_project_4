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
  inputName,
  inputTitle,
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

let myId;


const popupWithImage = new PopupWithImage(openImageModal);
popupWithImage.setEventListeners();

const deleteFormElement = new PopupWithForm({
  popupSelector: deleteCardModal,
});


deleteFormElement.setEventListeners();

const createNewCard = (cardItem, myId) => {
  const card = new Card(
    {
      cardItem,
      handleCardClick: ({ title, link }) => {
        popupWithImage.open(title, link);
      },
      handleDeleteClick: (cardItem) => {
        deleteFormElement.open({ cardId: cardItem._id });
        deleteFormElement.setSubmitAction(() => {
          api
            .deleteCard(card.id())
            .then(() => {
              card.remove();
            })
            .catch((err) => console.log("Error! " + err))
            .finally(() => deleteFormElement.renderLoading(false));
        });
      },
      handleLikeClick: (LikeButtonActive, cardId, likeCounter) => {
        api.updateLike(LikeButtonActive, cardId).then((result) => {
          likeCounter.textContent = result.likes.length;
        });
      },
      myId,
    },
    cardTemplateSelector,
    userProfileInfo.getUserInfo.myId,
  );
  const cardTemplate = card.generateCard();
  return cardTemplate;
};

const cardList = new Section({
  items: [], renderer: (cardItem) => {
    cardList.addItem(createNewCard(cardItem, myId));
  }
}, listWrapper);

const userProfileInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
  imageSelector: ".profile__avatar",
});

api
  .getAppInfo()
  .then(([initialCards, userInfo]) => {
   myId = userInfo._id;
    userProfileInfo.setUserInfo(userInfo);
    initialCards.forEach((cardItem) => {
      cardList.addItem(createNewCard(cardItem, userInfo._id));
    });
  })
  .catch((err) => {
    console.log(err);
  });


const addFormElement = new PopupWithForm({
  popupSelector: addCardModal,
  submitHandler: (formData) => {
    addFormElement.renderLoading(true);
    api
      .addCard(formData)
      .then((cardItem) => {
        cardList.prependItem(createNewCard(cardItem, cardItem.owner._id), true);
      })
      .then(() => {
        addFormElement.close();
      })
      .then(() => {
        addFormElement.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => addFormElement.renderLoading(false))
  },
});
addFormElement.setEventListeners();
addButton.addEventListener("click", () => {
  addFormElement.open();
});

const avatarFormElement = new PopupWithForm({
  popupSelector: changeAvatarModal,
  submitHandler: (formData) => {
    avatarFormElement.renderLoading(true);
    api
      .changeAvatar(formData)
      .then((result) => {
        userProfileInfo.setUserInfo(result);
      })
      .catch(console.log)
      .finally(() => avatarFormElement.renderLoading(false));
  },
})
avatarFormElement.setEventListeners();
profileAvatarButton.addEventListener("click", () => {
  avatarFormElement.open();
});

const editFormElement = new PopupWithForm({
  popupSelector: ".modal_type_edit-profile",
  submitHandler: (formData) => {
    editFormElement.renderLoading(true);
    api
      .changeUserInfo(formData)
      .then((result) => {
        userProfileInfo.setUserInfo(result);
      })
      .catch(console.log)
      .finally(() => editFormElement.renderLoading(false));
  },
});
editFormElement.setEventListeners();
editButton.addEventListener("click", () => {
  const profileData = userProfileInfo.getUserInfo();
  inputName.value = profileData.name;
  inputTitle.value = profileData.job;
  editFormElement.open();
});

const formList = Array.from(
  document.querySelectorAll(defaultConfig.formSelector)
);
formList.forEach((formElement) => {
  const formValidate = new FormValidator(defaultConfig, formElement);
  formValidate.enableValidation();
});


