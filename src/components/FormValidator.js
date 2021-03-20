export default class FormValidator {
  constructor(config, formSelector) {
    this._formElement = formSelector;
    this._config = config;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _showErrorMessage(inputElement, errorMessage) {
    const error = this._formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = errorMessage;

    error.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideErrorMessage(inputElement) {
    const error = this._formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = '';

    error.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideErrorMessage(inputElement);
    } else {
      this._showErrorMessage(inputElement, inputElement.validationMessage);
    }
  }

  _toggleButtonState(inputs, button) {
    const isValid = inputs.every((inputElement) => inputElement.validity.valid);
    if (isValid) {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const button = this._formElement.querySelector(this._submitButtonSelector);
    this._formElement.addEventListener('reset', () => {
      inputs.forEach((inputElement) => {
        this._hideErrorMessage(inputElement)
        this._toggleButtonState(inputs, button);
      })
    });
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputs, button);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', ((e) => {
      e.preventDefault();
    }));
    this._setEventListeners();
  }
}