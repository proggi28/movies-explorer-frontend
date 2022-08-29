class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _getHeaders() {
    const jwt = localStorage.getItem("jwt");
    return {
      Authorization: `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  getUserSaveMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._getHeaders(),
      method: 'POST',
      body: JSON.stringify(movie),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  saveUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }
}

 const mainApi = new MainApi({
  baseUrl: 'https://api.movie-karpenko.nomoreparties.sbs',
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json',
  },
});

export default mainApi;