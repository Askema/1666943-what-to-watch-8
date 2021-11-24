import {Film} from '../types/film';

export const getAllGenres = (films: Film[]): string[] => [...new Set(films.map((film) => film.genre))];
