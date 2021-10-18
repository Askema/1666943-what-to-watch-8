import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/const';
import AddReviewPage from '../add-review-page/AddReviewPage';
import FilmPage from '../film-page/FilmPage';
import { Films } from '../../types/film';
import MainPage from '../main-page/MainPage';
import MyList from '../my-list-page/MyListPage';
import NotFoundPage from '../not-found-page/NotFoundPage';
import PlayerPage from '../player-page/PlayerPage';
import PrivateRoute from '../private-route/private-route';
import { Promo } from '../../types/promo';
import SignIn from '../sign-in/sign-in';

type AppProps = {
  promo: Promo;
  films: Films;
}

function App({promo, films}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            promo={promo}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SignIn} component={SignIn} />
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList films={films}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <FilmPage films={films}/>
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewPage films={films}/>
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerPage films={films}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
