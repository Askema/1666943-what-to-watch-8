import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.films].genre;
export const getFilmsPerPageCount = (state: State): number => state[NameSpace.films].filmsPerPageCount;
export const getCurrentPlayerTime = (state: State): number => state[NameSpace.films].currentPlayerTime;
export const getVideoDuration = (state: State): number => state[NameSpace.films].videoDuration;
