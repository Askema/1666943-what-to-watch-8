import { Links } from '../../constants/const';
import AddReviewForm from '../add-review-form/add-review-form';
import NotFoundPage from '../not-found-page/NotFoundPage';
import { ConnectedProps, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { fetchCurrentFilmAction } from '../../store/api-actions';
import { useParams } from 'react-router';
import UserBlock from '../user-block/user-block';
import {useEffect} from 'react';

const mapStateToProps = (state: State) => ({
  film: state.currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewPage({ film, fetchCurrentFilm }: PropsFromRedux): JSX.Element {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    fetchCurrentFilm(Number(id));
  }, [fetchCurrentFilm, id]);

  if (film) {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Logo />
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={Links.OverviewFilmById(film.id)} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="/">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <AddReviewForm />
        </div>

      </section>
    );
  } return (
    <NotFoundPage />
  );
}

export { AddReviewPage };
export default connector(AddReviewPage);

