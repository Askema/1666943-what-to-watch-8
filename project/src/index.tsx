import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const PROMO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
  previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promo={PROMO}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
