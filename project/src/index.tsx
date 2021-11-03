import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

const PROMO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
  previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={PROMO}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
