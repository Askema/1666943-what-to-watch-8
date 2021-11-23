import { ALL_GENRES } from '../constants/const';
import { films } from '../mocks/films';
import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';

const initialState = {
  genre: ALL_GENRES,
  films: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, genre: action.payload };
    case ActionType.UpdateFilmList:
      return { ...state, films: action.payload };
    default:
      return state;
  }
};

export { reducer };
