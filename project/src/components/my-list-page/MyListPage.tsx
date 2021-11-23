import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../constants/const';
import {useState} from 'react';
import { updateFilmList } from '../../store/action';

type MyListPageProps = {
  films: Film[];
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const favoriteFilms = films.filter((film) => film.isFavorite === true);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.SignIn} className="user-block__link"> sign out</Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((film) => (
            <FilmCard
              setActiveCardId={setActiveCardId}
              isActive={film.id === activeCardId}
              key={film.id}
              film={film}
              onUpdateFilmList={updateFilmList}
              films={films}
            />
          ),
          )};
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
