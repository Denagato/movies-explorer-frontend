import { Link, useLocation } from "react-router-dom";
import accountPic from "../../images/account.svg";

import "./PopupMenu.css";

function PopupMenu() {
  // Временно, чтобы работало подчеркивание ссылки
  const location = useLocation().pathname;

  // Временно, чтобы работало закрытие меню
  function handleClick() {
    document.querySelector(".popup").classList.remove("popup_opened");
  }

  return (
    <nav className="popup">
      <div className="popup__container">
        <Link to="/" className="popup__link" onClick={handleClick}>
          Главная
        </Link>
        <Link
          to="/movies"
          className={`popup__link ${
            location === "/movies" && "popup__link_current"
          }`}
          onClick={handleClick}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`popup__link ${
            location === "/saved-movies" && "popup__link_current"
          }`}
          onClick={handleClick}
        >
          Сохранённые фильмы
        </Link>
        <Link
          to="/profile"
          className="popup__link-account"
          onClick={handleClick}
        >
            <img className="popup__pic" alt="Аккаунт" src={accountPic}></img>
            <span className="popup__link-text">Аккаунт</span>
        </Link>
        <button className="popup__btn-close" onClick={handleClick} />
      </div>
    </nav>
  );
}

export default PopupMenu;
