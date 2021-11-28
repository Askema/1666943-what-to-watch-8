import { APIRoute, APIRouteById, AppRoute, AuthorizationStatus, Links } from '../constants/const';
import { FilmFromServer, FilmsFromServer } from '../types/film';
import { adaptFilmToClient, adaptFilmsToClient } from '../utils/adapter/adapter';
import { dropToken, saveToken } from '../services/token';
import { dropUserAvatar, loadFilm, loadFilms, redirectToRoute, requireAuthorization, requireLogout, saveUserAvatar, setLoginError } from './action';
import { AuthData } from '../types/auth-data';
import { AuthInfoFromServer } from '../types/auth-info';
import { HttpCode } from '../services/api';
import { ThunkActionResult } from '../types/action';
import { adaptAuthInfoToClient } from '../utils/adapter/auth-info';
import axios from 'axios';
import { getLoginError } from '../utils/auth-errors';
import { CommentPost } from '../types/review';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<FilmsFromServer>(APIRoute.Films);
      dispatch(loadFilms(adaptFilmsToClient(data)));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpCode.NotFound) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      }
    }
  };

export const fetchCurrentFilmAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<FilmFromServer>(APIRouteById.FilmById(filmId));
      dispatch(loadFilm(adaptFilmToClient(data)));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpCode.NotFound) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      }
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const dataFromServer = await api.post<AuthInfoFromServer>(APIRoute.Login, { email, password });
      const adaptedAuthInfo = adaptAuthInfoToClient(dataFromServer.data);
      saveToken(adaptedAuthInfo.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(saveUserAvatar(adaptedAuthInfo.avatarUrl));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpCode.BadRequest) {
          dispatch(setLoginError(getLoginError(email, password)));
        }
      }
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(dropUserAvatar());
  };

export const changeFavoriteStatusAction = (filmId: number, favoriteStatus: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post(APIRouteById.ChangeFavoriteStatusByFilmId(filmId, favoriteStatus));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpCode.Unauthorized) {
          dispatch(redirectToRoute(AppRoute.SignIn));
        }
      }
    }
  };

export const commentPostAction = (filmId: number, { rating, comment }: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post<CommentPost>(APIRouteById.CommentPostByFilmId(filmId), { rating, comment });
      dispatch(redirectToRoute(Links.ReviewsFilmById(filmId)));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpCode.Unauthorized) {
          dispatch(redirectToRoute(AppRoute.SignIn));
        }
      }
    }
  };
