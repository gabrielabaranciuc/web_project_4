export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("modal__reset-button") ||
        e.target.classList.contains("modal_opened")
      ) {
        this.close();
      }
    });
  }
}