import { configureStore } from "@reduxjs/toolkit";
import { yeAPI } from "../services/quotes";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(yeAPI.middleware),
  reducer: {
    [yeAPI.reducerPath]: yeAPI.reducer,
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
