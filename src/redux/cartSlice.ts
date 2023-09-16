import { CartState } from "@/types/cart";
import { MovieType } from "@/types/movie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartStore = createSlice({
  name: "cartStore",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<MovieType>) => {
      let itemIsOnList: boolean = state.products.some(
        (item) => item.id === action.payload.id
      );

      if (state.products.length > 0) {
        if (itemIsOnList) {
          state.products = state.products.map((item) => {
            if (item.id === action.payload.id) {
              item.quantity++;
            }
            return item;
          });
        } else {
          state.products = [
            ...state.products,
            {
              id: action.payload.id,
              quantity: 1,
            },
          ];
        }
      } else {
        state.products = [
          {
            id: action.payload.id,
            quantity: 1,
          },
        ];
      }

      state.quantity++;
      state.total =
        Math.round((state.total + action.payload.price) * 100) / 100;
    },
    removeMovie: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      const newProducts = state.products.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity--;
        }
      });
      console.log(newProducts);

      state.quantity--;
      state.total =
        Math.round((state.total - action.payload.price) * 100) / 100;
    },
    clearCart: (state) => {
      (state.products = []), (state.quantity = 0), (state.total = 0);
    },
  },
});

export const { addMovie, removeMovie, clearCart } = cartStore.actions;
export default cartStore.reducer;
