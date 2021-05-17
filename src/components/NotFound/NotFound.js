import { Link, useHistory } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__back" onClick={handleClick}>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
