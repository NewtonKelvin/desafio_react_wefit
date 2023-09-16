import { MovieType } from "./movie";

export type CartState = {
  products: ItemType[];
  total: number;
  quantity: number;
};

export type ItemType = {
  id: number;
  quantity: number;
};

export type CartAction = {
  type: CartActions;
  payload: MovieType;
};

export enum CartActions {
  ADD_MOVIE = "ADD_MOVIE",
}
