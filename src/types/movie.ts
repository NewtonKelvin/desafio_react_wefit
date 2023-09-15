export type ProductsType = {
  products: MovieType[];
};

export type MovieType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type MovieAction = {
  type: MovieActions;
  payload: ProductsType;
};

export enum MovieActions {
  SET_PRODUCTS = "SET_PRODUCTS",
}
