import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__line"></div>
        <div className="footer__main">
          <p className="footer__copyright">&copy; 2020</p>
          <div className="footer__links">
            <a
              className="footer__link"
              href="https://praktikum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link footer__link_github"
              href="https://github.com/Denagato/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="footer__link footer__link_facebook"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
