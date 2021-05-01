import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import "./HeaderMain.css";

function HeaderMain() {
  return (
    <header className="header-main">
      <div className="header-main__container">
        <Link to="/">
          <img className="header-main__logo" alt="Логотип" src={logo}></img>
        </Link>
        <nav className="header-main__sign">
          <Link to="/signup" className="header-main__signup">
            Регистрация
          </Link>
          <Link to="/signin" className="header-main__signin">
            <button className="header-main__signin-btn">Войти</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMain;
