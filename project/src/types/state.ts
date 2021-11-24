import {Film, Films} from './film';
import {AuthorizationStatus} from '../constants/const';

export type State = {
  genre: string,
  films: Films,
  filmsPerPageCount: number,
  currentFilm?: Film,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  userAvatar: string,
  loginError?: string,
};
