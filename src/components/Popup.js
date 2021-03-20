import { EscKey } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose() {
    document.addEventListener("keyup", (e) => {
      if (
        e.key === "Escape" ||
        (e.keyCode === EscKey &&
          this._formElement.classList.contains(
            `${this._popupSelector}_opened`
          ))
      ) {
        this.close();
        e.target.removeEventListener("keyup", this._handleEscClose);
      }
    });
  }

  setEventListeners() {
    this._popupElement
      .querySelector(".modal__reset-button")
      .addEventListener("click", () => {
        this.close();
      });
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        this._handleEscClose(e.key);
        this.close(e.target);
        e.target.removeEventListener("keyup", this._handleEscClose);
      }
    });
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", (e) => {
      this._handleEscClose(e.key);
    });
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    this._removeEventListeners();
  }

  _handleOverlayClick(e) {
    if (e.target.classList.contains("modal_opened")) {
      this.close();
    }
  }

  _removeEventListeners() {
    document.removeEventListener("keyup", this._handleEscClose);
    this._popupElement.removeEventListener("click", this.close);
  }
}