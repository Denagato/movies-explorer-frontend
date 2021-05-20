import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header({ togglePopup }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link" href="/">
          <img className="header__logo" alt="Логотип" src={logo}></img>
        </Link>
        <Navigation togglePopup={togglePopup} />
      </div>
    </header>
  );
}

export default Header;
