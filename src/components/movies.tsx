"use client";
import { api } from "@/services/api";
import { AxiosError } from "axios";
import "dotenv/config";
import { useEffect, useReducer } from "react";
import styled from "styled-components";
import { CartActions, MovieActions, ProductsType } from "../types/movie";

function reducer(state: ProductsType, action: CartActions) {
  switch (action.type) {
    case MovieActions.LIST_PRODUCTS:
      return {
        ...state,
      };
      break;
    default:
      return state;
      break;
  }
}

const MyMovies = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Movies() {
  const [state, dispatch] = useReducer(reducer, { products: [] });

  const GetAllMovies = async () => {
    await api
      .get("/products")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err: AxiosError<ProductsType>) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GetAllMovies();
  }, []);

  return (
    <MyMovies>
      <p>{process.env.API_URL}</p>
      {state.products.map((movie, index) => {
        return (
          <ul key={index}>
            <li>
              Id: {movie.id} - Título: {movie.title}
            </li>
          </ul>
        );
      })}
    </MyMovies>
  );
}
