export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/notfound'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
}

export const APIRouteById = {
  FilmById: ((id: number): string => `/films/${id}`),
  CommentsByFilmId: ((filmId: number): string => `/comments/${filmId}`),
  SimilarFilmsById: ((filmId: number): string => `/films/${filmId}/similar`),
  CommentPostByFilmId: ((filmId: number): string => `/comments/${filmId}`),
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Links = {
  OverviewFilmById: ((id: number): string => `/films/${id}`),
  DetailsFilmById: ((id: number): string => `/films/${id}/details`),
  ReviewsFilmById: ((id: number): string => `/films/${id}/reviews`),
  AddReviewByFilmId: ((id: number): string => `/films/${id}/review`),
  PlayerById: ((id: number): string => `/player/${id}`),
};

export const ALL_GENRES = 'All genres';

export const FILMS_PER_PAGE_COUNT = 8;
