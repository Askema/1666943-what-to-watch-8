import {ConnectedProps, connect} from 'react-redux';
import {useLocation, useParams} from 'react-router';

import { AppRoute } from '../../constants/const';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import { getPromo } from '../../store/film-data/selectors';
import {useState} from 'react';

type MyListButtonProps = {
  isFavorite: boolean;
}

const mapStateToProps = (state: State) => ({
  promo: getPromo(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFavoriteButtonClick(filmId: number, favoriteStatus: number) {
    dispatch(changeFavoriteStatusAction(filmId, favoriteStatus));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MyListButtonProps;

function MyListButton(props: ConnectedComponentProps): JSX.Element {
  const {onFavoriteButtonClick, isFavorite, promo} = props;

  const {id} = useParams<{id: string}>();
  let currentId = Number(id);
  const {pathname} = useLocation<{pathname: string}>();

  if (pathname === AppRoute.Main && promo) {
    currentId = promo.id;
  }

  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);

  const handleClick = () => {
    onFavoriteButtonClick(currentId, Number(!favoriteStatus));
    setFavoriteStatus(!favoriteStatus);
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={favoriteStatus ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export {MyListButton};
export default connector(MyListButton);
