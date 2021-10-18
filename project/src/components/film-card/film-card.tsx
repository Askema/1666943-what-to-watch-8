import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

type FilmCardProps = {
  film: Film;
}

function FilmCardPage({film}: FilmCardProps): JSX.Element {


  return (
    <>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </>
  );
}

export default FilmCardPage;
