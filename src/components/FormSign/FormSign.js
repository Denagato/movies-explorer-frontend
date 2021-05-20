import logo from "../../images/logo.svg";

import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from '../../utils/useForm';
import "./FormSign.css";

const FormSign = memo(
  ({
    name,
    title,
    onSubmit,
    btnName,
    textError,
    clearTextError,
  }) => {
    const form = useForm();

    useEffect(() => {
      clearTextError();
    }, [name]);

    return (
      <form
        className="form"
        name={`form_${name}`}
        noValidate
        onSubmit={(e) =>
          onSubmit(e, {
            name: form.values.name,
            email: form.values.email,
            password: form.values.password,
          })
        }
      >
        <div className="form__container">
          <Link to="/">
            <img className="form__logo" alt="Логотип" src={logo}></img>
          </Link>
          <h2 className="form__title">{title}</h2>
          {name === "signup" && (
            <>
              <label className="form__field" htmlFor="form-name-">
                Имя
              </label>
              <input
                type="text"
                className="form__input"
                id={`form-name-${name}`}
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                required
                onChange={form.handleChange}
              />
              <span className="form__error">{`${
                form.errors.name ? form.errors.name : ''
              }`}</span>
            </>
          )}
          <label className="form__field" htmlFor="form-email-">
            E-mail
          </label>
          <input
            type="text"
            className="form__input"
            id={`form-email-${name}`}
            name="email"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            required
            onChange={form.handleChange}
          />
          <span className="form__error">{`${
            form.errors.email ? form.errors.email : ''
          }`}</span>
          <label className="form__field" htmlFor="form-password-">
            Пароль
          </label>
          <input
            type="password"
            className="form__input"
            id={`form-password-${name}`}
            name="password"
            placeholder="Пароль"
            minLength="8"
            required
            onChange={form.handleChange}
          />
          <span className="form__error">{`${
            form.errors.password ? form.errors.password : ''
          }`}</span>
          <span
            className={`form__text-error ${
              textError && 'form__text-error_visible'
            }`}
          >
            {textError && textError}
          </span>
          <button
            type="submit"
            className={`form__btn ${!form.isValid && 'form__btn_disabled'}`}
            disabled={!form.isValid}
          >
            {btnName}
          </button>
          {name === "signup" && (
            <p className="form__text">
              Уже зарегистрированы?{" "}
              <Link to="/signin" className="form__link">
                Войти
              </Link>
            </p>
          )}
          {name === "signin" && (
            <p className="form__text">
              Еще не зарегистрированы?{" "}
              <Link to="/signup" className="form__link">
                Регистрация
              </Link>
            </p>
          )}
        </div>
      </form>
    );
  }
);

export default FormSign;
