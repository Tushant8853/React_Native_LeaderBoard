// src/redux/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Tushant',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = appSlice.actions;
export default appSlice.reducer;
