export type ProductsType = {
  products: MoviesType[] | [];
};

export type MoviesType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartActions = {
  type: MovieActions;
  payload: ProductsType;
};

export enum MovieActions {
  LIST_PRODUCTS = "LIST_PRODUCTS",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}
