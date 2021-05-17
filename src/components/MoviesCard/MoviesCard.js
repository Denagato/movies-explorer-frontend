import './MoviesCard.css';
import noImage from '../../images/no_image.jpg';

function MoviesCard({ card, userCards, saveMovie, deleteUserMovie }) {
  let isUserMovie = false;
  let userMovieId;

  if (userCards) {
    isUserMovie = userCards.some((userCard) => {
      if (userCard.movieId === card.movieId) {
        userMovieId = userCard._id;
        return true;
      }
    });
  }

  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{card.nameRU}</h3>
        <span className="card__time">
          {`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}
        </span>
        <button
          className={`card__button
                    ${
                      card._id
                        ? 'card__button_remove'
                        : isUserMovie
                        ? 'card__button_save'
                        : ''
                    }`}
          onClick={() =>
            isUserMovie || card._id
              ? deleteUserMovie(card._id ? card._id : userMovieId)
              : saveMovie(card)
          }
        />
      </div>
      <a
        className="card__link"
        href={card.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__image"
          alt={card.nameRU}
          src={card.image ? card.image : noImage}
        />
      </a>
    </div>
  );
}

export default MoviesCard;
