import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../constants/const';
import AddReviewPage from '../add-review-page/AddReviewPage';
import FilmPage from '../film-page/FilmPage';
import MainPage from '../main-page/MainPage';
import MyList from '../my-list-page/MyListPage';
import NotFoundPage from '../not-found-page/NotFoundPage';
import PlayerPage from '../player-page/PlayerPage';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';
import browserHistory from '../../browser-history';


function App(): JSX.Element {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.SignIn} component={SignIn} />
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route path={AppRoute.Film}>
          <FilmPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewPage />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
