export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then((res) =>
        (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  loadUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) =>
        (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(
        { avatar: avatar.imageLink }
      ),
    })
      .then((res) =>
        (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  changeUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    })
      .then((res) =>
        (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    })
      .then((res) =>
        (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then((res) =>
        (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      )
      .catch((err) => {
        console.log(err);
      });
  }

  updateLike(LikeButtonActive, cardId) {
    if (LikeButtonActive) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._headers
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: this._headers
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}