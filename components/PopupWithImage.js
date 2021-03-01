import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupElement = this._popup.querySelector(".modal__image");
    this._imagePopupCaption = this._popup.querySelector(".modal__image-caption");
  }
  open(link, text) {
    this._imagePopupElement.src = link;
    this._imagePopupElement.alt = text;
    this._imagePopupCaption.textContent = text;
    super.open();
  }
}