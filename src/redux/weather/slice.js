import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: {},
    weatherInfo: {},
    favorites: [],
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
      state.favorites = state.favorites.filter((favorite) => favorite.LocalSource.Id !== action.payload);
    }
  },
});

export default slice.reducer;
export const {
  setCurrentWeather,
  setWeatherInfo,
  setCurrentWeatherId,
  setFavorite,
  setIsMetric,
  deleteFavorite,
} = slice.actions;
