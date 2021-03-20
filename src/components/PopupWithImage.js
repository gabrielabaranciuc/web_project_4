import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    const imagePopupElement = this._popupElement.querySelector(".modal__image");
    const imagePopupCaption = this._popupElement.querySelector(".modal__image-caption");

    imagePopupElement.src = link;
    imagePopupCaption.textContent = name;
    imagePopupElement.alt = name;
    super.open();
  }
}