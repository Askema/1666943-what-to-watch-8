import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/const';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {connect, ConnectedProps} from 'react-redux';
import {resetFilmList, resetFilmsPerPage, resetGenre} from '../../store/action';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onResetFilmList() {
    dispatch(resetFilmList());
  },
  onResetGenre() {
    dispatch(resetGenre());
  },
  onResetFilmsPerPage() {
    dispatch(resetFilmsPerPage());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Logo(props: PropsFromRedux): JSX.Element {
  const {onResetFilmList, onResetGenre, onResetFilmsPerPage} = props;
  return (
    <Link to={AppRoute.Main} className="logo__link"

      onClick={() => {
        onResetFilmList();
        onResetGenre();
        onResetFilmsPerPage();
      }}
    >
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export {Logo};
export default connector(Logo);
