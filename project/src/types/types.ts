type Promo = {
    name: string,
    genre: string,
    released: number,
    previewImage: string,
    posterImage: string,
  }
type Films = {
    id: number,
    name: string,
    previewImage: string,
  }[];

export type {Promo, Films};
