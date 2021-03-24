import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._formElement = this._popupElement.querySelector(".form");
    this._formButton = this._popupElement.querySelector(".form__submit-button");
    this._inputList = this._popupElement.querySelectorAll(".form__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((inputElement) => this._formValues[inputElement.name] = inputElement.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.renderLoading(true);
      this._submitHandler(
        this._getInputValues(),
        this._listItem,
        this._cardId
      );
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._formButton.textContent = "Saving...";
    }
    else {
      this._formButton.textContent = this._formButton.dataset.text;
    }
  }

  setSubmitAction(action) {
    this._submitHandler = action;
  }
}