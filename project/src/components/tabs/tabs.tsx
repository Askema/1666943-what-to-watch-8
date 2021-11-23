import {Link} from 'react-router-dom';
import TabDetails from '../tab-details/tab-details';
import {Film} from '../../types/film';
import {useHistory} from 'react-router';
import TabOverview from '../tab-overview/tab-overview';
import TabReviews from '../tab-reviews/tab-reviews';
import {APIRouteById, Links} from '../../constants/const';
import {Review} from '../../types/review';
import {useEffect, useState} from 'react';
import api from '../../services/api';

type TabsProps = {
  film: Film;
}

function Tabs({film}: TabsProps): JSX.Element {
  const [appState, setAppState] = useState<Review[]>([]);

  useEffect(() => {
    api.get<Review[]>(APIRouteById.CommentsByFilmId(film.id)).then((response) => setAppState(response.data));
  }, [film.id, setAppState]);

  const filmReviews = appState;

  const currentPath = useHistory().location.pathname;

  const renderTab = (path: string) => {
    if (path === Links.DetailsFilmById(film.id)) {
      return <TabDetails film={film}/>;
    } else if (path === Links.ReviewsFilmById(film.id)) {
      return <TabReviews reviews={filmReviews}/>;
    } else {
      return <TabOverview film={film}/>;
    }
  };

  const setActiveTab = (path: string) => currentPath === path ? 'film-nav__item--active' : '';

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${setActiveTab(Links.OverviewFilmById(film.id))}`}>
            <Link to={Links.OverviewFilmById(film.id)} className="film-nav__link">Overview</Link>
          </li>
          <li className={`film-nav__item ${setActiveTab(Links.DetailsFilmById(film.id))}`}>
            <Link to={Links.DetailsFilmById(film.id)} className="film-nav__link">Details</Link>
          </li>
          <li className={`film-nav__item ${setActiveTab(Links.ReviewsFilmById(film.id))}`}>
            <Link to={Links.ReviewsFilmById(film.id)} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {renderTab(currentPath)}

    </div>
  );
}

export default Tabs;
