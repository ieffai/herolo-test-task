import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    searched: [],
    error: '',
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSearched(state, action) {
      state.searched = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
export const {
  setIsLoading,
  setSearched,
  setError
} = slice.actions;
