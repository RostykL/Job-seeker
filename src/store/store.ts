import { configureStore } from "@reduxjs/toolkit";
import userReducer from "src/store/features/user/user.slice";
import { api } from "src/store/features/apiUtils/api";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
