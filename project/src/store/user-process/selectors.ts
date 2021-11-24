import {AuthorizationStatus} from '../../constants/const';
import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getUserAvatar = (state: State): string => state[NameSpace.user].userAvatar;
export const getLoginError = (state: State): string | undefined => state[NameSpace.user].loginError;
