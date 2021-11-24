import { ALL_GENRES, FILMS_PER_PAGE_COUNT } from '../constants/const';
import { films } from '../mocks/films';
import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';

const initialState = {
  genre: ALL_GENRES,
  films: films,
  filmsPerPageCount: FILMS_PER_PAGE_COUNT,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, genre: action.payload };
    case ActionType.UpdateFilmList:
      return { ...state, films: action.payload };
    case ActionType.ShowMoreFilms:
      return { ...state, filmsPerPageCount: state.filmsPerPageCount + FILMS_PER_PAGE_COUNT };
    case ActionType.ResetFilmsPerPage:
      return { ...state, filmsPerPageCount: FILMS_PER_PAGE_COUNT };
    default:
      return state;
  }
};

export { reducer };
