import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import NotFoundPage from '../not-found-page/NotFoundPage';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {fetchCurrentFilmAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import { useEffect } from 'react';

const mapStateToProps = (state: State) => ({
  film: state.currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function PlayerPage(props: PropsFromRedux): JSX.Element {
  const {film, fetchCurrentFilm} = props;
  const playerStyle = {
    left: '30%',
  };

  const {id} = useParams<{id: string}>();
  useEffect(() => {
    fetchCurrentFilm(Number(id));
  }, [fetchCurrentFilm, id]);

  if (film) {
    return (
      <div className="player">
        <video src={film.videoLink} className="player__video" poster={film.posterImage}></video>

        <Link to={`/films/${film.id}`} type="button" className="player__exit">Exit</Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={playerStyle}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <NotFoundPage />
    );
  }
}
export {PlayerPage};
export default connector(PlayerPage);
