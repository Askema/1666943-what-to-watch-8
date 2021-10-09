import Main from '../main-page/MainPage';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/const';
import AddReview from '../add-review-page/AddReviewPage';
import Film from '../film-page/FilmPage';
import MyList from '../my-list-page/MyListPage';
import NotFoundPage from '../not-found-page/NotFoundPage';
import Player from '../player-page/PlayerPage';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';
import {Promo, Films} from '../../types/types';

type AppProps = {
  promo: Promo;
  films: Films;
}

function App({promo, films}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            promo={promo}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SignIn} component={SignIn} />
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <Film />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
