import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AppRoute, FILMS_PER_PAGE_COUNT } from '../../constants/const';
import { Film } from '../../types/film';
import FilmList from '../film-list/film-list';
import { Promo } from '../../types/promo';
import GenreList from '../genre-list/genre-list';
import ShowMore from '../show-more/show-more';
import Logo from '../logo/logo';

type MainProps = {
  promo: Promo;
  films: Film[];
}

function MainPage({ promo, films }: MainProps): JSX.Element {
  const history = useHistory();

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.previewImage} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo/>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar"
                onClick={() => history.push(AppRoute.MyList)}
              >
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.SignIn} className="user-block__link"> Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={`${promo.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />

          <FilmList
            films={films}
            filmsPerPageCount={FILMS_PER_PAGE_COUNT}
          />
          <ShowMore />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Logo/>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
