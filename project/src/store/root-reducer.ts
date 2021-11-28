import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {filmSearch} from './film-search/film-search';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  Data = 'DATA',
  Films = 'FILMS',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmData,
  [NameSpace.Films]: filmSearch,
  [NameSpace.User]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
