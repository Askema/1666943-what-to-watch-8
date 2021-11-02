import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {useState, MouseEvent} from 'react';
import {useHistory} from 'react-router';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);
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
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
