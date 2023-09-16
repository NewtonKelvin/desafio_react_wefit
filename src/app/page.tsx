"use client";
import Movies from "@/components/movies";
import { api } from "@/services/api";
import { ProductsType } from "@/types/movie";
import { Box, Grid } from "@mui/material";
import { AxiosError } from "axios";
import { useEffect } from "react";

import { setProducts } from "@/redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export default function Home() {
  const movies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  async function GetAllMovies() {
    await api
      .get("/products")
      .then((response) => {
        const products: ProductsType = response.data;
        dispatch(setProducts(products));
      })
      .catch((err: AxiosError<ProductsType>) => {
        console.error(err);
      });
  }

  useEffect(() => {
    GetAllMovies();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {movies.products.map((movie, index) => (
            <Movies key={index} movie={movie} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
