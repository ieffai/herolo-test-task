import axios from 'axios';
import { BASE_URL, GOOGLE_URL } from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
});
const googleApi = axios.create({
  baseURL: GOOGLE_URL,
});

const createAppAuthInterceptor = (options) => (config) => {
  config.params = {
    apikey: options,
    ...config.params
  };
  return config;
};
const createGoogleAuthInterceptor = (options) => (config) => {
  config.params = {
    key: options,
    ...config.params
  };
  return config;
};

const setAuthApp = createAppAuthInterceptor(process.env.REACT_APP_API_KEY);
const setGoogleAuth = createGoogleAuthInterceptor(process.env.REACT_APP_GOOGLE_KEY);
api.interceptors.request.use(setAuthApp);
googleApi.interceptors.request.use(setGoogleAuth);

export { api, googleApi };
