import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { MouseEvent, Dispatch, SetStateAction } from 'react';
import VideoPlayer from '../video-player/video-player';
import { useState, useEffect } from 'react';
import { Actions } from '../../types/action';
import { updateFilmList } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { getSimilarFilms } from '../../utils/film';
import { Links }from '../../constants/const';


type FilmCardProps = {
  film: Film;
  isActive: boolean;
  setActiveCardId: Dispatch<SetStateAction<number | null>>;
  films: Film[];
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onUpdateFilmList(films: Film[]) {
    dispatch(updateFilmList(films));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmCardProps;

function FilmCard({ films, film, isActive, setActiveCardId, onUpdateFilmList }: ConnectedComponentProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (!isActive) {
      setIsPlaying(false);
      return;
    }
    const id = setTimeout(() => {
      if (isActive) {
        setIsPlaying(true);
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [isPlaying, isActive]);

  const filmCardOnClick = () => {
    onUpdateFilmList(getSimilarFilms(film, films));
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={({ target }: MouseEvent<HTMLElement>) => {
        setActiveCardId(film.id);
      }}
      onMouseLeave={({ target }: MouseEvent<HTMLElement>) => {
        setActiveCardId(null);
      }}
      onClick={filmCardOnClick}
    >
      <Link to={Links.OverviewFilmById(film.id)}>
        <div className="small-film-card__image">
          <VideoPlayer
            src={film.previewVideoLink}
            previewImage={film.previewImage}
            autoPlay={false}
            muted
            isActive={isPlaying}
            width='280'
          />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={Links.OverviewFilmById(film.id)} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
