"use client";
import Movies from "@/components/movies";
import { api } from "@/services/api";
import { MovieAction, MovieActions, ProductsType } from "@/types/movie";
import { Box, Grid } from "@mui/material";
import { AxiosError } from "axios";
import { useEffect, useReducer } from "react";

function moviesReducer(state: ProductsType, action: MovieAction) {
  switch (action.type) {
    case MovieActions.SET_PRODUCTS:
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(moviesReducer, { products: [] });

  const GetAllMovies = async () => {
    await api
      .get("/products")
      .then((response) => {
        const products: ProductsType = response.data;
        dispatch({
          type: MovieActions.SET_PRODUCTS,
          payload: products,
        });
      })
      .catch((err: AxiosError<ProductsType>) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GetAllMovies();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {state.products.map((movie, index) => (
            <Movies key={index} movie={movie} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
