import { configureStore } from '@reduxjs/toolkit';
import { COUNTER_FEATURE_KEY, counterReducer } from './counter.slice';

export const store = configureStore({
  reducer: {
    [COUNTER_FEATURE_KEY]: counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
