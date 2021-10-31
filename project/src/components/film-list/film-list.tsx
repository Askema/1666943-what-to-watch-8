import {useState, MouseEvent} from 'react';
import {useHistory} from 'react-router';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps): JSX.Element {

  const [, setActiveCardId] = useState({});
  const history = useHistory();

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article key={`${film.id}`} className="small-film-card catalog__films-card"
          onMouseEnter={({target}: MouseEvent<HTMLElement>) => {
            setActiveCardId(film);
          }}
          onMouseLeave={({target}: MouseEvent<HTMLElement>) => {
            setActiveCardId([{}]);
          }}
          onClick={() => history.push(`/films/${film.id}`)}
        >
          <FilmCard
            film={film}
          />
        </article>
      ),
      )};
    </div>
  );
}

export default FilmList;
