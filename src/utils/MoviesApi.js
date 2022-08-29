class MoviesApi {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

    _errorHandler(res) {
        if(res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(this._errorHandler)
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })