export default class UserInfo {
    constructor({ nameSelector, titleSelector }) {
      this._nameEl = document.querySelector(nameSelector);
      this._titleEl = document.querySelector(titleSelector);
    }
    getUserInfo() {
      const name = this._nameEl.textContent;
      const title = this._titleEl.textContent;
      this._userInfos = { name, title };
      return this._userInfos;
    }
  
    setUserInfo(inputValues) {
      this._nameEl.textContent = inputValues.name;
      this._titleEl.textContent = inputValues.title;
    }
  }