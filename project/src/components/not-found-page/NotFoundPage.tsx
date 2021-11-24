import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/const';

function NotFoundScreen(): JSX.Element {
  return (
    <section>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
