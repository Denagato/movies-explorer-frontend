import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <a
          className="portfolio__link-site"
          href="https://github.com/Denagato/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="portfolio__name-site">Статичный сайт</h3>
          <div className="portfolio__img" />
        </a>
        <div className="portfolio__line"></div>
        <a
          className="portfolio__link-site"
          href="https://github.com/Denagato/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="portfolio__name-site">Адаптивный сайт</h3>
          <div className="portfolio__img" />
        </a>
        <div className="portfolio__line"></div>
        <a
          className="portfolio__link-site"
          href="https://github.com/Denagato/mesto-react"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="portfolio__name-site">Одностраничное приложение</h3>
          <div className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
