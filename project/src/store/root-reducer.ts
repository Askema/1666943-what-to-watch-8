import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {filmSearch} from './film-search/film-search';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  films = 'FILMS',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: filmData,
  [NameSpace.films]: filmSearch,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
