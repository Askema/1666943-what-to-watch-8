import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
  filmsPerPageCount: number;
}

function FilmList(props: FilmListProps): JSX.Element {
  const {films, filmsPerPageCount} = props;

  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsPerPageCount).map((film) => (
        <FilmCard
          setActiveCardId={setActiveCardId}
          isActive={film.id === activeCardId}
          key={film.id}
          film={film}
        />
      ),
      )}
    </div>
  );
}

export default FilmList;
