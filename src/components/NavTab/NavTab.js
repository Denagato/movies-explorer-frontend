import "./NavTab.css";

function NavTab() {
  return (
    <div className="nav">
      <a href="#about-project" className="nav-link">
        <button className="nav-link__button">О проекте</button>
      </a>
      <a href="#technologies" className="nav-link">
        <button className="nav-link__button">Технологии</button>
      </a>
      <a href="#student" className="nav-link">
        <button className="nav-link__button">Студент</button>
      </a>
    </div>
  );
}

export default NavTab;
