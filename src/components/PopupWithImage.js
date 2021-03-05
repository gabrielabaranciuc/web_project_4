import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  open(name, link) {
    const imagePopupElement = this._popupElement.querySelector(".modal__image");
    const imagePopupCaption = this._popupElement.querySelector(".modal__image-caption");

    imagePopupElement.src = link;
    imagePopupElement.alt = name;
    imagePopupCaption.textContent = name;
    super.open();
  }
}