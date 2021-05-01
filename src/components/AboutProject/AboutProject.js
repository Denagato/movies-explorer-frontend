import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <a name="about-project"></a>
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__line"></div>
        <div className="about-project__info">
          <div className="about-project__card">
            <h3 className="about-project__card-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__card">
            <h3 className="about-project__card-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__time">
          <div className="about-project__backend-time">1 неделя</div>
          <div className="about-project__frontend-time">4 недели</div>
        </div>
        <div className="about-project__task">
          <div className="about-project__backend">Back-end</div>
          <div className="about-project__frontend">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
