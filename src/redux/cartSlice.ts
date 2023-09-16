import { MovieType, ProductsType } from "@/types/movie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProductsType = {
  products: [],
};

export const cartStore = createSlice({
  name: "cartStore",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<MovieType>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { addMovie } = cartStore.actions;
export default cartStore.reducer;
