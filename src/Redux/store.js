// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
