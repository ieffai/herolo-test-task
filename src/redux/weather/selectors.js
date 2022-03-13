import { createSelector } from '@reduxjs/toolkit';

const getWeatherState = (state) => state.weather;

export const getCurrentWeatherSelector = createSelector(getWeatherState, (weather) => weather.currentWeather);
export const getCurrentWeatherIdSelector = createSelector(getWeatherState, (weather) => weather.currentWeather.Key);
export const getWeatherIconSelector = createSelector(getWeatherState, (weather) => weather.currentWeather.WeatherIcon);
export const getPlaceNameSelector = createSelector(getWeatherState, (weather) => weather.currentWeather.LocalSource.Name);
export const getTemperatureMetricSelector = createSelector(getWeatherState, (weather) => weather.currentWeather.Temperature.Metric.Value);
export const getTemperatureImperialSelector = createSelector(getWeatherState, (weather) => weather.currentWeather.Temperature.Imperial.Value);
export const getWeatherTextSelector = createSelector(getWeatherState, (weather) => weather.currentWeather.WeatherText);
export const getFavoritesSelector = createSelector(getWeatherState, (weather) => weather.favorites);

