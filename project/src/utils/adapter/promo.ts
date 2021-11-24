import {FilmFromServer} from '../../types/film';
import {Promo} from '../../types/promo';

export const adaptPromoToClient = (promo: FilmFromServer): Promo => ({
  name: promo.name,
  genre: promo.genre,
  released: promo.released,
  previewImage: promo['preview_image'],
  posterImage: promo['poster_image'],
});
