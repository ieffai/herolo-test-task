import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    }
  },
});

export default slice.reducer;
export const {
  setIsLoading,
} = slice.actions;
