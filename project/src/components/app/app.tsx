import Main from '../main/main';
import {Promo, Films} from '../../types/types';

type AppProps = {
  promo: Promo;
  films: Films;
}

function App({promo, films}: AppProps): JSX.Element {

  return (
    <Main
      promo={promo}
      films={films}
    />
  );
}

export default App;
