import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import {State} from '../../types/state';
import {connect} from 'react-redux';

import { updateFilmList } from '../../store/action';

type FilmListProps = {
  films: Film[];
}

const mapStateToProps = (state: State) => ({
  films: state.films,
});

const connector = connect(mapStateToProps, null);

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
          films={films}
          onUpdateFilmList={updateFilmList}
        />
      ),
      )}
    </div>
  );
}

export {FilmList};
export default connector(FilmList);
