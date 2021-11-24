import {ActionType, Actions} from '../../types/action';

import {FilmData} from '../../types/state';

const initialState: FilmData = {
  films: [],
  isDataLoaded: false,
};

const filmData = (state = initialState, action: Actions): FilmData => {
  switch (action.type) {
    case ActionType.LoadFilms: {
      const {films} = action.payload;
      return {...state, films, isDataLoaded: true};
    }
    case ActionType.LoadFilm: {
      const {currentFilm} = action.payload;
      return {...state, currentFilm};
    }
    case ActionType.LoadPromo: {
      const {promo} = action.payload;
      return {...state, promo};
    }
    default:
      return state;
  }
};

export {filmData};
