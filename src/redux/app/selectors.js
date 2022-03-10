import { createSelector } from '@reduxjs/toolkit';

const getAppState = (state) => state.app;

export const getIsLoading = createSelector(getAppState, (app) => app.isLoading);
