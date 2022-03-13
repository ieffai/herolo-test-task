import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
});

const createAuthInterceptor = (options) => (config) => {
  config.params = {
    apikey: options,
    ...config.params
  };
  return config;
};

const setAuth = createAuthInterceptor(process.env.REACT_APP_API_KEY);

api.interceptors.request.use(setAuth);

export { api };
