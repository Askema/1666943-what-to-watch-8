import { ALL_GENRES } from '../../constants/const';
import {Film} from '../../types/film';

export const getFilmsByGenre = (genre: string,  films: Film[]): Film[] => {

  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const getFavoriteFilms = (films: Film[]): Film[] => films.filter((film) => film.isFavorite === true);
