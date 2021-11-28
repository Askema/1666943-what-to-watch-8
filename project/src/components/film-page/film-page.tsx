import { APIRouteById, AuthorizationStatus, Links } from '../../constants/const';
import { Link } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import Tabs from '../tabs/tabs';
import FilmList from '../film-list/film-list';
import Logo from '../logo/logo';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { useParams } from 'react-router';
import { fetchCurrentFilmAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import UserBlock from '../user-block/user-block';
import { Films, FilmsFromServer } from '../../types/film';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { adaptFilmsToClient } from '../../utils/adapter/adapter';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getCurrentFilm } from '../../store/film-data/selectors';
import { getFilmsPerPageCount } from '../../store/film-search/selectors';
import MyListButton from '../my-list-button/my-list-button';

const SIMILAR_FILMS_COUNT = 4;


const mapStateToProps = (state: State) => ({
  filmsPerPageCount: getFilmsPerPageCount(state),
  film: getCurrentFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmPage({ film, filmsPerPageCount, fetchCurrentFilm, authorizationStatus }: PropsFromRedux): JSX.Element {
  const { id } = useParams<{ id: string }>();


  const [appState, setAppState] = useState<Films>([]);

  useEffect(() => {
    api.get<FilmsFromServer>(APIRouteById.SimilarFilmsById(Number(id))).then((response) => setAppState(adaptFilmsToClient(response.data)));
    fetchCurrentFilm(Number(id));
  }, [fetchCurrentFilm, id, setAppState]);

  const similarFilms = appState.slice(0, SIMILAR_FILMS_COUNT);

  if (film) {
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <div className="logo">
                <Logo />
              </div>

              <UserBlock />
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <MyListButton isFavorite={film.isFavorite} />
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <Link to={Links.AddReviewByFilmId(film.id)} className="btn film-card__button">Add review</Link>
                    : ''}
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>

              <Tabs film={film} />

            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList films={similarFilms} filmsPerPageCount={filmsPerPageCount} />
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
      </>
    );
  } else {
    return (
      <NotFoundPage />
    );
  }
}

export { FilmPage };
export default connector(FilmPage);
