import './SearchForm.css';

function SearchForm() {

  return (
    <section className="search">
      <div className="search__flex">
        <form className="search__form">
          <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Фильм"
          required
          />
        </form>
        <button className="search__button">Найти</button>
      </div>
      <div className="search__flex search__flex_tumbler">
        <button className="search__button-tumbler"></button>
        <p className="search__name-tumbler">Короткометражки</p>
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
