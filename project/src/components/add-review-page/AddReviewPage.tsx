import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute, Links} from '../../constants/const';
import AddReviewForm from '../add-review-form/add-review-form';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import NotFoundPage from '../not-found-page/NotFoundPage';
import {useParams} from 'react-router';
import {fetchCurrentFilmAction} from '../../store/api-actions';
import {store} from '../..';
import {ThunkAppDispatch} from '../../types/action';

const mapStateToProps = (state: State) => ({
  film: state.currentFilm,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewPage({ film }: PropsFromRedux): JSX.Element {
  const { id } = useParams<{ id: string }>();
  (store.dispatch as ThunkAppDispatch)(fetchCurrentFilmAction(Number(id)));

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

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <Link to={AppRoute.MyList}>
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </Link>
                </div>
              </li>
              <li className="user-block__item">
                <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
              </li>
            </ul>
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

export {AddReviewPage};
export default connector(AddReviewPage);

