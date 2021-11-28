import {Film, Films} from '../../types/film';

import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getCurrentFilm = (state: State): Film | undefined => state[NameSpace.Data].currentFilm;
export const getPromo = (state: State): Film | undefined => state[NameSpace.Data].promo;
