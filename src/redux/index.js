import { configureStore, combineReducers } from '@reduxjs/toolkit';
import app from './app/slice';
import weather from './weather/slice';

const rootReducer = combineReducers({
    app: app,
    weather: weather,
});

export const store = configureStore({
    reducer: rootReducer,
});