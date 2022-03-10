import { configureStore, combineReducers } from '@reduxjs/toolkit';
import app from './app/slice';

const rootReducer = combineReducers({
    app: app,
});

export const store = configureStore({
    reducer: rootReducer,
});