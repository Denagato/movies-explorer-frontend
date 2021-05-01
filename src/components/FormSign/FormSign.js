import logo from "../../images/logo.svg";

import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./FormSign.css";

const FormSign = memo(
  ({ name, title, onChange, isInvalid, isLoading, btnName, changeCurrUrl }) => {
    function onSubmit(e) {
      e.preventDefault();
    }

    return (
      <form
        className="form"
        name={`form_${name}`}
        noValidate
        onSubmit={onSubmit}
      >
        <div className="form__container">
          <Link to="/">
            <img className="form__logo" alt="Логотип" src={logo}></img>
          </Link>
          <h2 className="form__title">{title}</h2>
          {name === "signup" && (
            <>
              <label className="form__field" for="form-name-">
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
                onChange={onChange}
              />
            </>
          )}
          <label className="form__field" for="form-email-">
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
            onChange={onChange}
          />
          <label className="form__field" for="form-password-">
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
            onChange={onChange}
          />
          <span className="form__error">Что-то пошло не так...</span>
          <button
            type="submit"
            className={`form__btn ${isInvalid ? "form__btn_disabled" : ""}`}
            disabled={isInvalid}
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
