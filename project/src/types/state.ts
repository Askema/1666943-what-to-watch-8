import {Film, Films} from './film';
import {AuthorizationStatus} from '../constants/const';
import {RootState} from '../store/root-reducer';

export type FilmData = {
  films: Films,
  currentFilm?: Film,
  isDataLoaded: boolean,
  promo?: Film,
};

export type FilmSearch = {
  genre: string,
  filmsPerPageCount: number,
  currentPlayerTime: number,
  videoDuration: number,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userAvatar: string,
  loginError?: string,
};

export type State = RootState;
