import {getFilmsPerPageCount, getGenre} from '../../store/film-search/selectors';
import {Actions} from '../../types/action';
import {Dispatch} from 'redux';
import {Films} from '../../types/film';
import {State} from '../../types/state';
import {getFilms} from '../../store/film-data/selectors';
import {getFilmsByGenre} from '../../utils/adapter/film';
import {showMoreFilms} from '../../store/action';
import {ConnectedProps, connect} from 'react-redux';

type ShowMoreProps = {
  films: Films;
  filmsPerPageCount: number;
}

const mapStateToProps = (state: State) => ({
  films: getFilms(state),
  filmsPerPageCount: getFilmsPerPageCount(state),
  genre: getGenre(state),
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
