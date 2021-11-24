import {Film, Films} from '../../types/film';

import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.data].films;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getCurrentFilm = (state: State): Film | undefined => state[NameSpace.data].currentFilm;
export const getPromo = (state: State): Film | undefined => state[NameSpace.data].promo;
