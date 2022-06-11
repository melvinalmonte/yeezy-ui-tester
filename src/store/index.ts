import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import quoteReducer from "../features/quotes/quoteSlice";

const store = configureStore({
  middleware: [thunk],
  reducer: {
    kanye: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
