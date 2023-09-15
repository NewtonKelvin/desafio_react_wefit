"use client";
import { cartReducer } from "@/app/cart/page";
import { CartAction, CartState } from "@/types/cart";
import { createContext, useReducer } from "react";

import * as React from "react";

type Dispatch = (action: CartAction) => void;
type State = CartState;

export const CartContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    total: 0,
    quantity: 0,
  });

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
