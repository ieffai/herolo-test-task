import { createSelector } from '@reduxjs/toolkit';

const getAppState = (state) => state.app;

export const getIsLoading = createSelector(getAppState, (app) => app.isLoading);
export const getSearchedResultsSelector = createSelector(getAppState, (app) => app.searched);
export const getErrorSelector = createSelector(getAppState, (app) => app.error);
