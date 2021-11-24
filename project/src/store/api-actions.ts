import {APIRoute, APIRouteById} from '../constants/const';
import {ThunkActionResult} from '../types/action';
import {FilmFromServer, FilmsFromServer} from '../types/film';
import {adaptFilmsToClient, adaptFilmToClient} from '../utils/adapter/adapter';
import {loadFilm, loadFilms} from './action';


export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<FilmsFromServer>(APIRoute.Films);
    dispatch(loadFilms(adaptFilmsToClient(data)));
  };

export const fetchCurrentFilmAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<FilmFromServer>(APIRouteById.FilmById(filmId));
    dispatch(loadFilm(adaptFilmToClient(data)));
  };
