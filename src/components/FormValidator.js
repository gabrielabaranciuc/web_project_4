export default class FormValidator {
    constructor(config, formSelector) {
        this._formElement = formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;

        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _showErrorMessage(input, errorMessage) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        error.textContent = errorMessage;

        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        error.textContent = '';

        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideErrorMessage(input);
        } else {
            this._showErrorMessage(input, input.validationMessage);
        }
    }

    _toggleButtonState(inputs, button) {
        const isValid = inputs.every((input) => input.validity.valid);

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
        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
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