import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ergastAPI } from './apis/ergastAPI';
import { addDriver, removeDriver, changeSearchTerm, favoriteDriversReducer } from './favoriteDriversSlice';
import { changeName, changeDescription, formReducer } from './formSlice';

export const store = configureStore({
  reducer: {
    [ergastAPI.reducerPath]: ergastAPI.reducer,
    drivers: favoriteDriversReducer,
    form: formReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(ergastAPI.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchDriverQuery } from './apis/ergastAPI';
export { addDriver, removeDriver, changeSearchTerm, changeDescription, changeName};

