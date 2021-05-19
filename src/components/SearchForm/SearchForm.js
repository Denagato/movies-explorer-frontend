import './SearchForm.css';
import { useState } from 'react';

function SearchForm({
  runSearch,
  runSearchSavedMovies,
  page,
  searchTrigger,
  onFilter,
  isShortMovie,
}) {
  const [inputSearch, setInputSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const strSearch = inputSearch.toLowerCase();

    if (inputSearch) {
      searchTrigger(true);
      if (page === 'movies') {
        runSearch(strSearch);
        return;
      }
      if (page === 'saved-movies') {
        runSearchSavedMovies(strSearch);
        return;
      }
    }
  }

  function handleChange(e) {
    setInputSearch(e.target.value);
    if (e.target.value) {
    }
  }

  function handleOnFilter() {
    onFilter(page);
  }

  return (
    <section className="search">
      <div className="search__flex">
        <form className="search__form" noValidate onSubmit={handleSubmit}>
          <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Фильм"
          required
          onChange={handleChange}
          value={inputSearch}
          />
        </form>
        <button className="search__button" onClick={handleSubmit}>Найти</button>
      </div>
      <div className="search__flex search__flex_tumbler">
        <button
        className={`search__button-tumbler ${isShortMovie && 'search__button-tumbler-on'}`}
        type="button"
        onClick={handleOnFilter}
        ></button>
        <p className="search__name-tumbler">Короткометражки</p>
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
