import { CartAction, CartActions, CartState } from "@/types/cart";

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActions.ADD_MOVIE:
      state.products = [...state.products, action.payload];
      state.total = state.total + action.payload.price;
      state.quantity = state.quantity + 1;
      console.log(state);
      return state;
      break;
    default:
      return state;
      break;
  }
}
