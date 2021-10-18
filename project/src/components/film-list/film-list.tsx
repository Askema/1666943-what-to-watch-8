import {useState, MouseEvent} from 'react';
import {useHistory} from 'react-router';
import {Films} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films;
}

function FilmList({films}: FilmListProps): JSX.Element {

  const [, setActiveCard] = useState({});
  const history = useHistory();

  return (
    <div className="catalog__films-list">
      {films.map((film, id) => {
        const keyValue = `${id}`;

        return (
          <article key={keyValue} className="small-film-card catalog__films-card"
            onMouseEnter={({target}: MouseEvent<HTMLElement>) => {
              setActiveCard(film);
            }}
            onMouseLeave={({target}: MouseEvent<HTMLElement>) => {
              setActiveCard([{}]);
            }}
            onClick={() => history.push(`/films/${film.id}`)}
          >
            <FilmCard
              film={film}
            />
          </article>
        );
      })};
    </div>
  );
}

export default FilmList;
