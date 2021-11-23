import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { MouseEvent, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
import VideoPlayer from '../video-player/video-player';
import { useState, useEffect } from 'react';
import { Actions } from '../../types/action';
import { updateFilmList } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { getSimilarFilms } from '../../utils/film';


type FilmCardProps = {
  film: Film;
  isActive: boolean;
  setActiveCardId: Dispatch<SetStateAction<number | null>>;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onUpdateFilmList(films: Film[]) {
    dispatch(updateFilmList(films));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmCardProps;

function FilmCard({ film, isActive, setActiveCardId, onUpdateFilmList }: ConnectedComponentProps): JSX.Element {
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

  const history = useHistory();

  const filmCardOnClick = () => {
    history.push(`/films/${film.id}`);
    onUpdateFilmList(getSimilarFilms(film));
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
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
