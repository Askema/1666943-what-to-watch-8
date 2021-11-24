import {Film, Films} from './film';

export type State = {
  genre: string,
  films: Films,
  filmsPerPageCount: number,
  currentFilm?: Film,
  isDataLoaded: boolean,
};
