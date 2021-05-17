import { definitionError } from './definitionError';
import { URL_MAIN } from '../constants/constants';
let token = localStorage.getItem('jwt');

export const register = (nameUser, email, password, next) => {
  return fetch(`${URL_MAIN}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: nameUser, email, password }),
  })
  .then((res) => {
    return definitionError(res);
  })
  .catch(next)
};

export const authorize = (email, password, next) => {
  return fetch(`${URL_MAIN}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then((res) => {
    return definitionError(res);
  })
  .catch(next)
};

export const getContent = (next) => {
  return fetch(`${URL_MAIN}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    return definitionError(res);
  })
  .catch(next)
};

export const logout = (next) => {
  return fetch(`${URL_MAIN}/signout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    return definitionError(res);
  })
  .catch(next)
};
