class Api {
  constructor(options) {
    this._url = options.baseUrl;
    // this._headers = options.headers;
    // this._authorization = options.headers.authorization;
  }
  _checkResponse() {
    return (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    };
  }
  // получаем инфу о пользователе
  getInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    }).then(this._checkResponse());
    /* Возвращаем Promise, с информацией о пользователе. Если запрос не удался, Promise отклоняется.
     */
  }

  // отправляем GET-запрос на сервер для получения списка карточек.
  // Возвращаем Promise, со списком карточек. Если запрос не удался, Promise отклоняется.
  getCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkResponse());
  }

  // отправляем POST-запрос на сервер для добавления новой карточки.
  // Принимаем объект data, содержащий данные новой карточки: ссылку на изображение и название.
  // Возвращаем Promise, с информацией о новой карточке. Если запрос не удался, Promise отклоняется.
  addCard(data, token) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then(this._checkResponse());
  }
  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkResponse());
  }
}
const api = new Api({
  baseUrl: "",
});
export default api;
