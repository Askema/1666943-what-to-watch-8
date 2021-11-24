import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

import {
  changeGenre,
  dropUserAvatar,
  loadFilm,
  loadFilms,
  loadPromo,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  resetFilmsPerPage,
  resetGenre,
  saveUserAvatar,
  setLoginError,
  showMoreFilms
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetGenre = 'films/resetGenre',
  UpdateFilmList = 'films/updateFilmList',
  ResetFilmList = 'films/resetFilmList',
  ShowMoreFilms = 'films/showMoreFilms',
  ResetFilmsPerPage = 'films/resetFilmsPerPage',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'films/redirectToRoute',
  SaveUserAvatar = 'data/saveUserAvatar',
  DropUserAvatar = 'data/dropUserAvatar',
  SetLoginError = 'uesr/setLoginError',
  LoadPromo = 'data/loadPromo',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetGenre>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof resetFilmsPerPage>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof saveUserAvatar>
  | ReturnType<typeof dropUserAvatar>
  | ReturnType<typeof setLoginError>
  | ReturnType<typeof loadPromo>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
