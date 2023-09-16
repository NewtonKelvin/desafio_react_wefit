import { ProductsType } from "@/types/movie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProductsType = {
  products: [],
};

export const moviesStore = createSlice({
  name: "moviesStore",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsType>) => {
      state.products = action.payload.products;
    },
  },
});

export const { setProducts } = moviesStore.actions;
export default moviesStore.reducer;
