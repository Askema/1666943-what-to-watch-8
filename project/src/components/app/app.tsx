import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../constants/const';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import MainPage from '../main-page/main-page';
import MyList from '../my-list-page/MyListPage';
import NotFoundPage from '../not-found-page/not-found-page';
import PlayerPage from '../player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';
import browserHistory from '../../browser-history';
import {ConnectedProps, connect} from 'react-redux';
import {State} from '../../types/state';
import LoadingScreen from '../loading-screen/loading-screen';
import {getLoadedDataStatus} from '../../store/film-data/selectors';

const mapStateToProps = (state: State) => ({
  isDataLoaded: getLoadedDataStatus(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
function App(props: PropsFromRedux): JSX.Element {
  const {isDataLoaded} = props;
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewPage />}
        >
        </PrivateRoute>
        <Route path={AppRoute.Film}>
          <FilmPage />
        </Route>
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
export {App};
export default connector(App);
