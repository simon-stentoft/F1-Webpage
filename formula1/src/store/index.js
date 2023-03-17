import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ergastAPI } from './apis/ergastAPI';

export const store = configureStore({
  reducer: {
    [ergastAPI.reducerPath]: ergastAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(ergastAPI.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchDriverQuery } from './apis/ergastAPI';