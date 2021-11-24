import {ALL_GENRES, AppRoute} from '../../constants/const';
import {Film} from '../../types/film';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Link} from 'react-router-dom';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {changeGenre} from '../../store/action';
import {resetFilmsPerPage} from '../../store/action';
import {getFilms} from '../../store/film-data/selectors';
import {getGenre} from '../../store/film-search/selectors';

type GenreListProps = {
  genre: string;
}

const mapStateToProps = (state: State) => ({
  genre: getGenre(state),
  films: getFilms(state),
});


const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
  },
  onResetFilmsPerPage() {
    dispatch(resetFilmsPerPage());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenreListProps;

function GenreList({genre, films, onChangeGenre, onResetFilmsPerPage}: ConnectedComponentProps): JSX.Element {

  const genresFromFilms = (allFilms: Film[]): string[] => [...new Set(allFilms.map((film) => film.genre))];
  const genresList = [ALL_GENRES, ...genresFromFilms(films)];

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item, id) => {
        const keyValue = `${id}`;

        return (
          <li key={keyValue} className={`catalog__genres-item ${genre === item ? 'catalog__genres-item--active' : ''} `}
            onClick={() => {
              onChangeGenre(item);
              onResetFilmsPerPage();
            }}
          >
            <Link to={AppRoute.Main} className="catalog__genres-link">{item}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export {GenreList};
export default connector(GenreList);
