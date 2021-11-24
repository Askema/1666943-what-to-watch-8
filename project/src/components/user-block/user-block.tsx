import { AppRoute, AuthorizationStatus } from '../../constants/const';
import { ConnectedProps, connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { logoutAction } from '../../store/api-actions';

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.authorizationStatus,
  userAvatar: state.userAvatar,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  signOut() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock(props: PropsFromRedux): JSX.Element {
  const { authorizationStatus, signOut, userAvatar } = props;

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src={userAvatar} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoute.SignIn}
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();

              signOut();
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </li>
    </ul>
  );
}

export { UserBlock };
export default connector(UserBlock);
