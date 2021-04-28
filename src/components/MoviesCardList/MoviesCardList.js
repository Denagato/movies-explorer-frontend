import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards }) {
  return (
    <>
      <section className="cards">
        {cards.map((card) => (
          <MoviesCard card={card} />
        ))}
      </section>
      {cards.length > 11 && <button className="more">Ещё</button>}
    </>
  );
}

export default MoviesCardList;
