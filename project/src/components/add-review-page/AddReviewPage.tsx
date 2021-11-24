import {Film} from '../../types/film';
import {useParams, useHistory} from 'react-router';
import NotFoundPage from '../not-found-page/NotFoundPage';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../constants/const';
import AddReviewForm from '../add-review-form/add-review-form';
import Logo from '../logo/logo';

type AddReviewPageProps = {
  films: Film[];
}

function AddReviewPage(props: AddReviewPageProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));
  const history = useHistory();

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
              <Logo/>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="/">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar"
                  onClick={() => history.push(AppRoute.MyList)}
                >
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
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

export default AddReviewPage;
