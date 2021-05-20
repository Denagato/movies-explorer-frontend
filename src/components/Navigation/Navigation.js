import { Link } from 'react-router-dom';
import accountPic from '../../images/account.svg';

import './Navigation.css';

function Navigation({ togglePopup }) {
  return (
    <nav className="navigation">
      <div className="navigation__films">
      <Link to="/movies" className="navigation__link navigation__link_movies">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="navigation__link navigation__link_saved">
        Сохранённые фильмы
      </Link>
      </div>
      <div className="navigation__acc">
      <Link to="/profile" className="navigation__link-account">
        <img className="navigation__pic" alt="Аккаунт" src={accountPic}></img>
        <span className="navigation__link-text">Аккаунт</span>
      </Link>
      <button className="navigation__button" onClick={togglePopup}></button>
      </div>
    </nav>
  );
}

export default Navigation;
