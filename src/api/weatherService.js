import { setError, setIsLoading, setSearched } from '../redux/app/slice';
import { setCurrentWeather, setForecast, setWeatherInfo } from '../redux/weather/slice';
import { AUTOCOMPLETE_URL, CURRENT_WEATHER_URL, FORECAST_WEATHER_URL, GEOLOCATION_SEARCH, INITIAL_PLACE, INITIAL_WEATHER, NOT_FOUND } from '../utils/constants';
import { api } from './apiConfig';
import { getPicture } from './appService';

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
            return Key
        } catch (e) {
            dispatch(setError(e.response.data.Message))
            throw e;
        }
    };
};

export const getWeather = (id, isMetric, place) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await api.get(CURRENT_WEATHER_URL + id);
            const {
                LocalObservationDateTime: date,
                WeatherText: desc,
                WeatherIcon: icon,
                Temperature: temp
            } = data[0];
            const payload = { date, desc, icon, temp };
            await dispatch(getPicture(place));
            place && dispatch(setWeatherInfo({ id: id, city: place }));
            dispatch(getForecast(id, isMetric))
            dispatch(setCurrentWeather(payload))
        } catch (e) {
            throw e;
        } finally {
            dispatch(setIsLoading(false))
        }
    };
};
export const getForecast = (id, unitType) => {
    return async (dispatch) => {
        try {
            const { data } = await api.get(FORECAST_WEATHER_URL + id, {
                params: {
                    metric: unitType
                }
            });
            const { DailyForecasts: forecast } = data;
            dispatch(setForecast(forecast))
        } catch (e) {
            throw e;
        }
    };
};

export const getInitialWeather = (unitType) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            await dispatch(getPicture(INITIAL_PLACE));
            await dispatch(getSearchResults(INITIAL_PLACE, true));
            await dispatch(getWeather(INITIAL_WEATHER, unitType));
            await dispatch(getForecast(INITIAL_WEATHER, unitType));
        } catch (e) {
            throw e;
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}
export const getGeoWeather = (unitType, coords) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await api.get(GEOLOCATION_SEARCH, {
                params: {
                    q: coords
                }
            });
            const { Key, LocalizedName } = data;
            const payload = {
                id: Key,
                city: LocalizedName
            }
            await dispatch(getPicture(LocalizedName));
            dispatch(setWeatherInfo(payload));
            await dispatch(getWeather(Key, unitType));
            await dispatch(getForecast(Key, unitType));
        } catch (e) {
            throw e;
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}