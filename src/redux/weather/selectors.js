import { createSelector } from '@reduxjs/toolkit';
import { icons } from '../../utils/iconsData';

const getWeatherState = (state) => state.weather;

export const getCurrentWeatherSelector = createSelector(getWeatherState, (weather) => weather.currentWeather);
export const getCurrentWeatherIdSelector = createSelector(getWeatherState, (weather) => weather.weatherInfo.id);
export const getPlaceNameSelector = createSelector(getWeatherState, (weather) => weather.weatherInfo?.city);
export const getWeatherIconSelector = createSelector(getWeatherState, (weather) => {
    const iconId = weather.currentWeather?.icon;
    const icon = icons.find(item => item.number === +iconId)?.url;
    return icon
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
    const id = weather.initialWeather?.id;
    const isLiked = weather.favorites.includes(item => item.Key === +id);
    return isLiked
});

export const getWeatherTextSelector = createSelector(getWeatherState, (weather) => weather.currentWeather?.desc);
export const getFavoritesSelector = createSelector(getWeatherState, (weather) => weather.favorites);

