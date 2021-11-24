import {ActionType, Actions} from '../../types/action';

import {AuthorizationStatus} from '../../constants/const';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAvatar: '',
  loginError: undefined,
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SaveUserAvatar:
      return {...state, userAvatar: action.payload};
    case ActionType.DropUserAvatar:
      return {...state, userAvatar: ''};
    case ActionType.SetLoginError:
      return {...state, loginError: action.payload};
    default:
      return state;
  }
};

export {userProcess};
