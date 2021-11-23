import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://8.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

const api = createAPI();
export default api;