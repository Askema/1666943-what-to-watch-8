import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {Films} from '../../types/film';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {showMoreFilms} from '../../store/action';
import { getFilmsByGenre } from '../../utils/films';

type ShowMoreProps = {
  films: Films;
  filmsPerPageCount: number;
}

const mapStateToProps = (state: State) => ({
  films: state.films,
  filmsPerPageCount: state.filmsPerPageCount,
  genre: state.genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onShowMoreFilms() {
    dispatch(showMoreFilms());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ShowMoreProps;

function ShowMore(props: ConnectedComponentProps): JSX.Element {
  const {films, filmsPerPageCount, genre, onShowMoreFilms} = props;

  if (getFilmsByGenre(genre, films).length > filmsPerPageCount) {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button"
          onClick={() => {
            onShowMoreFilms();
          }}
        >
          Show more
        </button>
      </div>
    );
  } else {
    return (
      <div className="catalog__more">
      </div>
    );
  }
}

export {ShowMore};
export default connector(ShowMore);
