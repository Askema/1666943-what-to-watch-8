import { APIRoute } from '../../constants/const';
import FilmList from '../film-list/film-list';
import { Promo } from '../../types/promo';
import GenreList from '../genre-list/genre-list';
import ShowMore from '../show-more/show-more';
import Logo from '../logo/logo';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { getFilmsByGenre } from '../../utils/adapter/film';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { adaptPromoToClient } from '../../utils/adapter/promo';
import { FilmFromServer } from '../../types/film';
import NotFoundPage from '../not-found-page/NotFoundPage';
import UserBlock from '../user-block/user-block';

const mapStateToProps = (state: State) => ({
  genre: state.genre,
  films: state.films,
  filmsPerPageCount: state.filmsPerPageCount,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const { genre, films, filmsPerPageCount } = props;
  const [appState, setAppState] = useState<Promo>();

  useEffect(() => {
    api.get<FilmFromServer>(APIRoute.Promo).then((response) => setAppState(adaptPromoToClient(response.data)));
  }, [setAppState]);
  const promo = appState;

  if (promo === undefined) {
    return <NotFoundPage />;
  } else {

    return (
      <>
        <section className="film-card">
          <div className="film-card__bg">
            <img src={promo.previewImage} alt={promo.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            <UserBlock />
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
            <FilmList films={getFilmsByGenre(genre, films)} filmsPerPageCount={filmsPerPageCount} />
            <ShowMore />

          </section>

          <footer className="page-footer">
            <div className="logo">
              <Logo />
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export { MainScreen };
export default connector(MainScreen);
