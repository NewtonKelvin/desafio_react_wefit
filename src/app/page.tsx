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

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      await api
        .get("/products")
        .then((response) => {
          const products: ProductsType = response.data;
          dispatch(setProducts(products));
        })
        .catch((err: AxiosError<ProductsType>) => {
          if (!abortController.signal.aborted) {
            console.error(err.message);
          }
        });
    };
    fetchData();
    return () => abortController.abort();
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
