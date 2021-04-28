import "./AboutMe.css";
import myfoto from "../../images/foto.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <a name="student"></a>
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__line"></div>
        <div className="about-me__main">
          <div className="about-me__textblock">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__specialty">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__details">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <div className="about-me__links">
              <a
                className="about-me__link"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="about-me__link"
                href="https://github.com/Denagato"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <img className="about-me__fotoblock" alt="Фото" src={myfoto}></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
