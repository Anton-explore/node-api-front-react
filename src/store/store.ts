import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { bootcampApi } from '../api/bootcampApi';
import { coursesApi } from '../api/coursesApi';
import { usersApi } from '../api/usersApi';
import { reviewsApi } from '../api/reviewsApi';

export const store = configureStore({
  reducer: {
    [bootcampApi.reducerPath]: bootcampApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bootcampApi.middleware)
      .concat(coursesApi.middleware)
      .concat(usersApi.middleware)
      .concat(reviewsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;