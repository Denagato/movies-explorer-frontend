import { definitionError } from './definitionError';
import { URL_BEATFILM } from '../constants/constants';

class MoviesApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._errorServer = document.querySelector('.error-server');
  }

  _getResponseData(res) {
    return definitionError(res);
  }

  getAllCards() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: URL_BEATFILM,
  headers: {
    'Content-Type': 'application/json',
  },
});
