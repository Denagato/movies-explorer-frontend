import { httpCheck } from '../../utils/httpCheck';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const IMAGE_URL = 'https://api.nomoreparties.co';
const IMAGE_DEFAULT =
  'https://image.prntscr.com/image/Q2M96WKKT7adYRa3m0b-Rg.png';

function Movies({
  cards,
  userCards,
  runSearch,
  saveMovie,
  deleteUserMovie,
  isLoading,
  countMoviesToPage,
  handleCountMovies,
  searchTrigger,
  onSearch,
  onFilter,
  isShortMovie,
  textError,
  clearTextError,
}) {
  const newMoviesList = cards.map((movie) => {
    return {
      movieId: String(movie.id),
      nameRU: movie.nameRU ? movie.nameRU : 'Не указано название',
      nameEN: movie.nameEN ? movie.nameEN : 'Не указано название',
      country: movie.country ? movie.country : 'Не указана страна',
      director: movie.director ? movie.director : 'Не указан режиссер',
      year: movie.year ? movie.year : 'Не указан год',
      description: movie.description
        ? movie.description
        : 'Не указано описание',
      duration: movie.duration ? movie.duration : 'Не указано время',
      image: movie.image ? IMAGE_URL + movie.image.url : IMAGE_DEFAULT,
      trailer:
        movie.trailerLink && httpCheck(movie.trailerLink)
          ? movie.trailerLink
          : IMAGE_DEFAULT,
      thumbnail: movie.image
        ? IMAGE_URL + movie.image.formats.thumbnail.url
        : IMAGE_DEFAULT,
    };
  });

  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm
          page={'movies'}
          runSearch={runSearch}
          searchTrigger={searchTrigger}
          onFilter={onFilter}
          isShortMovie={isShortMovie}
        />
        <MoviesCardList
          page={'movies'}
          cards={newMoviesList}
          userCards={userCards}
          saveMovie={saveMovie}
          deleteUserMovie={deleteUserMovie}
          isLoading={isLoading}
          onSearch={onSearch}
          searchTrigger={searchTrigger}
          countMoviesToPage={countMoviesToPage}
          handleCountMovies={handleCountMovies}
          textError={textError}
          clearTextError={clearTextError}
        />
      </div>
    </div>
  );
}

export default Movies;
