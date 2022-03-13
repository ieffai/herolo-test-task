import { setError, setSearched } from '../redux/app/slice';
import { setCurrentWeather } from '../redux/weather/slice';
import { AUTOCOMPLETE_URL, CURRENT_WEATHER_URL } from '../utils/constants';
import { api } from './apiConfig';

export const getSearchResults = (query) => {
    return async (dispatch) => {
        try {
            const { data } = await api.get(AUTOCOMPLETE_URL, {
                params: {
                    q: query
                }
            });
            dispatch(setSearched(data))
        } catch (e) {
            dispatch(setError(e.message))
            throw e;
        }
    };
};

export const getWeather = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await api.get(CURRENT_WEATHER_URL + id);
            dispatch(setCurrentWeather(data[0]))
        } catch (e) {
            throw e;
        }
    };
};