import { Link, useLocation } from "react-router-dom";
import accountPic from "../../images/account.svg";

import "./PopupMenu.css";

function PopupMenu({ popup, togglePopup }) {
  const location = useLocation().pathname;

  return (
    <nav className={`popup ${popup && 'popup_opened'}`}>
      <div className="popup__container">
        <Link to="/" className="popup__link" onClick={togglePopup}>
          Главная
        </Link>
        <Link
          to="/movies"
          className={`popup__link ${
            location === "/movies" && "popup__link_current"
          }`}
          onClick={togglePopup}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`popup__link ${
            location === "/saved-movies" && "popup__link_current"
          }`}
          onClick={togglePopup}
        >
          Сохранённые фильмы
        </Link>
        <Link
          to="/profile"
          className="popup__link-account"
          onClick={togglePopup}
        >
            <img className="popup__pic" alt="Аккаунт" src={accountPic}></img>
            <span className="popup__link-text">Аккаунт</span>
        </Link>
        <button className="popup__btn-close" onClick={togglePopup} />
      </div>
    </nav>
  );
}

export default PopupMenu;
