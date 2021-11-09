import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
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
