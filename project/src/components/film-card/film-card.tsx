import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {MouseEvent, Dispatch, SetStateAction} from 'react';
import {useHistory} from 'react-router';
import VideoPlayer from '../video-player/video-player';
import {useState, useEffect} from 'react';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  setActiveCardId: Dispatch<SetStateAction<number | null>>;
}

function FilmCard({film, isActive, setActiveCardId}: FilmCardProps): JSX.Element {
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
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={({target}: MouseEvent<HTMLElement>) => {
        setActiveCardId(film.id);
      }}
      onMouseLeave={({target}: MouseEvent<HTMLElement>) => {
        setActiveCardId(null);
      }}
      onClick={() => history.push(`/films/${film.id}`)}
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
