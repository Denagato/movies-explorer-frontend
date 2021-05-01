import "./Movies.css";
/*Временные константы с фильмами*/
import moviesList from "../../constants/movies";
import userMoviesList from "../../constants/userMovies";

import SearchForm from "../SearchForm/SearchForm";
/* import Preloader from "../Preloader/Preloader"; */
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  const newMoviesList = moviesList.map((movie) => {
    let isUserSaved = false;

    userMoviesList.forEach((userMovie) => {
      userMovie.movieId === movie.id && (isUserSaved = true);
    });

    return {
      nameRU: movie.nameRU,
      duration: movie.duration,
      isUserSaved,
    };
  });

  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm />
        {/*<Preloader />*/}
        <MoviesCardList cards={newMoviesList} />
      </div>
    </div>
  );
}

export default Movies;
