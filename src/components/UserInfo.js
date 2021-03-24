export default class UserInfo {
  constructor({ nameSelector, jobSelector, imageSelector }) {
    this._profileNameEl = document.querySelector(nameSelector);
    this._profileJobEl = document.querySelector(jobSelector);
    this._profileImageEl = document.querySelector(imageSelector);
  }

  getUserInfo() {
    return {
      name: this._profileNameEl.textContent,
      job: this._profileJobEl.textContent,
      imageLink: this._profileImageEl.src,
      _id: this._id,
    };
  }

  setUserInfo(userInfo) {
    if (userInfo.avatar) {
      this._profileImageEl.src = userInfo.avatar;
    }
    this._profileNameEl.textContent = userInfo.name;
    this._profileJobEl.textContent = userInfo.about;
    this._id = this._myId;
  }
}

