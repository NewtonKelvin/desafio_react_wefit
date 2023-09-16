import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import moviesReducer from "../redux/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
