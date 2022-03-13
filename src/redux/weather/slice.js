import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_WEATHER } from '../../utils/constants';

const slice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: {
      Key: INITIAL_WEATHER
    },
    favorites: [],
  },
  reducers: {
    setCurrentWeather(state, action) {
      state.currentWeather = action.payload;
    },
    setCurrentWeatherId(state, action) {
      state.currentWeather.Key = action.payload;
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
  setCurrentWeatherId,
  setFavorite,
  deleteFavorite
} = slice.actions;
