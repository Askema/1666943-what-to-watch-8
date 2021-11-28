import {AppRoute, Links, PROMO_ID} from '../../constants/const';
import {ConnectedProps, connect} from 'react-redux';
import {getCurrentFilm, getPromo} from '../../store/film-data/selectors';
import {getCurrentPlayerTime, getVideoDuration} from '../../store/film-search/selectors';
import {getElapsedTime, getPlayerProgress} from '../../utils/adapter/film';
import {useEffect, useState} from 'react';

import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import VideoPlayer from '../video-player/video-player';
import {fetchCurrentFilmAction} from '../../store/api-actions';
import {useParams} from 'react-router';

const mapStateToProps = (state: State) => ({
  film: getCurrentFilm(state),
  currentPlayerTime: getCurrentPlayerTime(state),
  videoDuration: getVideoDuration(state),
  promo: getPromo(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayerPage(props: PropsFromRedux): JSX.Element {
  const {film, promo, currentPlayerTime, videoDuration, fetchCurrentFilm} = props;
  const {id} = useParams<{id: string}>();

  const [isActive, setIsActive] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  let currentFilm: Film | undefined;

  id === PROMO_ID ? currentFilm = promo : currentFilm = film;

  useEffect(() => {
    if (id !== PROMO_ID) {
      fetchCurrentFilm(Number(id));
    }
  }, [fetchCurrentFilm, id]);

  const onPlayClick = () => {
    setIsActive(!isActive);
  };

  const onFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  const playerStyle = {
    left: getPlayerProgress(currentPlayerTime, videoDuration),
  };

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  return (
    <div className="player">

      <VideoPlayer previewImage={currentFilm.posterImage} src={currentFilm.videoLink} muted={false} isActive={isActive} autoPlay width="100%"/>

      <Link to={id === PROMO_ID ? AppRoute.Main : Links.OverviewFilmById(currentFilm.id)} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getPlayerProgress(currentPlayerTime, videoDuration)} max="100"></progress>
            <div className="player__toggler" style={playerStyle}>Toggler</div>
          </div>
          <div className="player__time-value">{getElapsedTime(currentPlayerTime, videoDuration)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => {
              onPlayClick();
            }}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use
                xlinkHref={isActive ? '#pause' : '#play-s'}
              >
              </use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => {
              onFullScreenClick();
            }}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );

}

export {PlayerPage};
export default connector(PlayerPage);
