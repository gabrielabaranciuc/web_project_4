export const cardTemplateSelector = ".card-template";
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const inputName = document.querySelector(".form__input_type_name");
export const inputTitle = document.querySelector(".form__input_type_title");
export const currentName = document.querySelector(".profile__name");
export const currentTitle = document.querySelector(".profile__title");
export const templateCard = document.querySelector(".card-template").content;
export const editProfileModal = document.querySelector(".modal_type_edit-profile");
export const addCardModal = document.querySelector(".modal_type_add-card");
export const imagePopupSelector = ".modal__open-image";
export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
  cardTemplateSelector: ".card-template",
};
export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];