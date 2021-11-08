import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {MouseEvent, Dispatch, SetStateAction} from 'react';
import {useHistory} from 'react-router';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  setActiveCardId: Dispatch<SetStateAction<number | null>>;
}

function FilmCard({film, isActive, setActiveCardId}: FilmCardProps): JSX.Element {
  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={({target}: MouseEvent<HTMLElement>) => {
        setTimeout(() => {
          setActiveCardId(film.id);
        }, 1000);
      }}
      onMouseLeave={({target}: MouseEvent<HTMLElement>) => {
        setActiveCardId(null);
      }}
      onClick={() => history.push(`/films/${film.id}`)}
    >
      <div className="small-film-card__image">
        {isActive ?
          <VideoPlayer
            src={film.previewVideoLink}
            previewImage={film.previewImage}
            autoPlay={false}
            muted
            isActive={isActive}
            width='100%'
          />
          : <img src={film.previewImage} alt={film.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
