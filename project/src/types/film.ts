type Film = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
}

export type Films = Film[];

export type FilmFromServer = {
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  'scores_count': number,
  'run_time': number,
  'is_favorite': boolean,
  id: number,
  name: string,
  description: string,
  rating: number,
  director: string,
  genre: string,
  released: number,
  starring: string[],
}

export type FilmsFromServer = FilmFromServer[];

export type {Film};
