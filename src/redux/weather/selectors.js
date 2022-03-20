import { createSelector } from '@reduxjs/toolkit';
import { icons } from '../../utils/iconsData';

const getWeatherState = (state) => state.weather;

export const getCurrentWeatherSelector = createSelector(getWeatherState, (weather) => weather.currentWeather);
export const getCurrentWeatherIdSelector = createSelector(getWeatherState, (weather) => weather.weatherInfo.id);
export const getCurrentPlaceSelector = createSelector(getWeatherState, (weather) => weather.weatherInfo.city);
export const getUnitTypeSelector = createSelector(getWeatherState, (weather) => weather.isMetric);

export const getWeatherDetailsSelector = createSelector(getWeatherState, (weather) => {
    const iconId = weather.currentWeather?.icon;
    const city = weather.currentWeather?.city;
    const description = weather.currentWeather?.desc;
    const icon = icons.find(item => item.number === +iconId)?.url;
    return [icon, city, description]
});

export const getTemperatureSelector = createSelector(getWeatherState, (weather) => {
    const isMetric = weather.isMetric;
    const metric = weather.currentWeather?.temp?.Metric?.Value;
    const imperial = weather.currentWeather?.temp?.Imperial?.Value;
    const temperature = isMetric ? metric : imperial;
    const degreese = isMetric ? 'C' : 'F';
    return [temperature, degreese]
});

export const getIsLikedSelector = createSelector(getWeatherState, (weather) => {
    const id = weather.weatherInfo?.id;
    const isLiked = weather.favorites.some(item => +item.id === +id);
    return isLiked
});

export const getFavoritesSelector = createSelector(getWeatherState, (weather) => weather.favorites);

export const getForecastSelector = createSelector(getWeatherState, (weather) => weather.forecast);
