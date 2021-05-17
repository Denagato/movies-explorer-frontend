import { definitionError } from './definitionError';
import { URL_MAIN } from '../constants/constants';
let token = localStorage.getItem('jwt');

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._errorServer = document.querySelector('.error-server');
  }

  _getResponseData(res) {
    return definitionError(res);
  }

  getUserMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  saveMovieToServer(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(movie),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  deleteMovieFromServer(movieDelId) {
    return fetch(`${this._baseUrl}/movies/${movieDelId}`, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  getUserInfoFromServer() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  saveUserInfoToServer(newUserInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(newUserInfo),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: URL_MAIN,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
