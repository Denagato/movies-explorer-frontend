/*Временная константа с фильмами*/
import userMoviesList from "../../constants/userMovies";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  const newUserMoviesList = userMoviesList.map((movie) => {
    return {
      nameRU: movie.nameRU,
      duration: movie.duration,
      movieId: movie.movieId,
    };
  });

  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm />
        {/* <Preloader / > */}
        <MoviesCardList cards={newUserMoviesList} />
      </div>
    </div>
  );
}

export default SavedMovies;
