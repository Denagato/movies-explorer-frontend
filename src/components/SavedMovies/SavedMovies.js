import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  userCards,
  deleteUserMovie,
  runSearchSavedMovies,
  inputFilterSearch,
  searchTrigger,
  onSearch,
  countMoviesToPage,
  handleCountMovies,
  isShortMovie,
  onFilter,
  textError,
}) {
  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm
          userCards={userCards}
          runSearchSavedMovies={runSearchSavedMovies}
          page={'saved-movies'}
          inputFilterSearch={inputFilterSearch}
          searchTrigger={searchTrigger}
          isShortMovie={isShortMovie}
          onFilter={onFilter}
        />
        <MoviesCardList
          cards={userCards}
          deleteUserMovie={deleteUserMovie}
          onSearch={onSearch}
          countMoviesToPage={countMoviesToPage}
          handleCountMovies={handleCountMovies}
          searchTrigger={searchTrigger}
          page={'saved-movies'}
          textError={textError}
        />
      </div>
    </div>
  );
}

export default SavedMovies;
