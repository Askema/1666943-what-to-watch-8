import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { Dispatch, SetStateAction } from 'react';
import VideoPlayer from '../video-player/video-player';
import { useState, useEffect } from 'react';
import { Links }from '../../constants/const';


type FilmCardProps = {
  film: Film;
  isActive: boolean;
  setActiveCardId: Dispatch<SetStateAction<number | null>>;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const { film, isActive, setActiveCardId} = props;
  const {name, previewImage, previewVideoLink} = film;

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

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setActiveCardId(film.id);
      }}
      onMouseLeave={() => {
        setActiveCardId(null);
      }}
    >
      <Link to={Links.OverviewFilmById(film.id)}>
        <div className="small-film-card__image">
          <VideoPlayer
            src={previewVideoLink}
            previewImage={previewImage}
            autoPlay={false}
            muted
            isActive={isPlaying}
            width='280'
          />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={Links.OverviewFilmById(film.id)} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
