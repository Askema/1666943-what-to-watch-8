import {Film} from './film';
import {changeGenre, updateFilmList, showMoreFilms, resetFilmsPerPage} from '../store/action';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  UpdateFilmList = 'films/getFilmsByGenre',
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
| ReturnType<typeof updateFilmList>
| ReturnType<typeof showMoreFilms>
| ReturnType<typeof resetFilmsPerPage>;
