import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
    this._submitHandler = submitHandler;
    this._submitHandler = this._submitHandler.bind(this);
    this._inputs = this._popup.querySelectorAll(".form__input");
    [this._name, this._title] = this._inputs;
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  open(currentUserInfo) {
    if (currentUserInfo) {
      this._name.value = currentUserInfo.name;
      this._title.value = currentUserInfo.title;
    }
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (e) => {
      this._submitHandler(
        this._getInputValues(),
        e,
        ".card-template"
      );
    });
  }
}