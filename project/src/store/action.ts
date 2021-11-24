import {ChangeGenreAction, ActionType, UpdateFilmListAction} from '../types/action';
import { Film } from '../types/film';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const updateFilmList = (films: Film[]): UpdateFilmListAction => ({
  type: ActionType.UpdateFilmList,
  payload: films,
});

export const showMoreFilms = () => ({
  type: ActionType.ShowMoreFilms,
} as const);

export const resetFilmsPerPage = () => ({
  type: ActionType.ResetFilmsPerPage,
} as const);
