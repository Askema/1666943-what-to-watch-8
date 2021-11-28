import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.Films].genre;
export const getFilmsPerPageCount = (state: State): number => state[NameSpace.Films].filmsPerPageCount;
export const getCurrentPlayerTime = (state: State): number => state[NameSpace.Films].currentPlayerTime;
export const getVideoDuration = (state: State): number => state[NameSpace.Films].videoDuration;
