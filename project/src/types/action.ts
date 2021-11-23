import {Film} from './film';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  UpdateFilmList = 'films/getFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type UpdateFilmListAction = {
  type: ActionType.UpdateFilmList;
  payload: Film[];
}

export type Actions = ChangeGenreAction | UpdateFilmListAction;
