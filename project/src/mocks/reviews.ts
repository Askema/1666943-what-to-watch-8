import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: '2019-05-08T14:13:56.569Z',
  },
  {
    id: 2,
    user: {
      id: 5,
      name: 'Matthew Lickona',
    },
    rating: 7.2,
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    date: '2019-03-24T13:43:03.569Z',
  },
];
