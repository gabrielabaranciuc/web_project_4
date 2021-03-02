import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupElement = this._popup.querySelector(".modal__image");
    this._imagePopupCaption = this._popup.querySelector(".modal__image-caption");
  }
  open(cardTitle, imageLink,) {
    this._imagePopupElement.src = imageLink;
    this._imagePopupElement.alt = cardTitle;
    this._imagePopupCaption.textContent = cardTitle;
    super.open();
  }
}