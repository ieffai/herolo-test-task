import { setError, setSearched } from '../redux/app/slice';
import { setCurrentWeather, setWeatherInfo } from '../redux/weather/slice';
import { AUTOCOMPLETE_URL, CURRENT_WEATHER_URL, INITIAL_PLACE, INITIAL_WEATHER, NOT_FOUND } from '../utils/constants';
import { api } from './apiConfig';

export const getSearchResults = (query, initial = false) => {
    return async (dispatch) => {
        try {
            const { data } = await api.get(AUTOCOMPLETE_URL, {
                params: {
                    q: query
                }
            });
            const { Key, LocalizedName } = data[0];
            const payload = {
                id: Key,
                city: LocalizedName
            }
            !initial ? dispatch(setSearched(data)) : dispatch(setWeatherInfo(payload))
        } catch (e) {
            dispatch(setError(NOT_FOUND))
            throw e;
        }
    };
};

export const getWeather = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await api.get(CURRENT_WEATHER_URL + id);
            const { LocalObservationDateTime, WeatherText, WeatherIcon, Temperature } = data[0];
            const payload = {
                date: LocalObservationDateTime,
                desc: WeatherText,
                icon: WeatherIcon,
                temp: Temperature
            }
            dispatch(setCurrentWeather(payload))
        } catch (e) {
            throw e;
        }
    };
};

export const getInitialWeather = () => {
    return async (dispatch) => {
        try {
            await dispatch(getSearchResults(INITIAL_PLACE, true));
            await dispatch(getWeather(INITIAL_WEATHER));
        } catch (e) {
            throw e;
        }
    }
}