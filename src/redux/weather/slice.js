import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: {},
    weatherInfo: {},
    favorites: [],
    forecast: [],
    isMetric: true
  },
  reducers: {
    setCurrentWeather(state, action) {
      state.currentWeather = {
        ...state.weatherInfo, ...action.payload
      };
    },
    setWeatherInfo(state, action) {
      state.weatherInfo = action.payload;
    },
    setWeatherId(state, action) {
      state.weatherInfo.id = action.payload;
    },
    setForecast(state, action) {
      state.forecast = action.payload;
    },
    setCurrentWeatherId(state, action) {
      state.currentWeather.id = action.payload
    },
    setIsMetric(state, action) {
      state.isMetric = action.payload;
    },
    setFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    deleteFavorite(state, action) {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
    }
  },
});

export default slice.reducer;
export const {
  setCurrentWeather,
  setWeatherInfo,
  setForecast,
  setCurrentWeatherId,
  setFavorite,
  setIsMetric,
  deleteFavorite,
  setWeatherId
} = slice.actions;
