import {Film} from './film';
import {changeGenre, updateFilmList, showMoreFilms, resetFilmsPerPage, resetFilmList, resetGenre} from '../store/action';
export enum ActionType {
  ResetGenre = 'films/resetGenre',
  UpdateFilmList = 'films/updateFilmList',
  ResetFilmList = 'films/resetFilmList',
  ChangeGenre = 'films/changeGenre',
  ShowMoreFilms = 'films/showMoreFilms',
  ResetFilmsPerPage = 'films/resetFilmsPerPage',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type UpdateFilmListAction = {
  type: ActionType.UpdateFilmList;
  payload: Film[];
}

export type Actions =
| ReturnType<typeof changeGenre>
| ReturnType<typeof resetGenre>
| ReturnType<typeof updateFilmList>
| ReturnType<typeof resetFilmList>
| ReturnType<typeof showMoreFilms>
| ReturnType<typeof resetFilmsPerPage>;
