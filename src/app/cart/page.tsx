"use client";
import ConvertToBrl from "@/utils/convertToBRL";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Empty from "../../../public/empty.svg";
import { RootState } from "../store";

import {
  addMovie,
  clearCart,
  removeAllMovies,
  removeMovie,
} from "@/redux/cartSlice";
import { MovieType } from "@/types/movie";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../hooks";

const Container = styled.div`
  hr {
    border: 0;
    border-top: 1px solid #999;
  }
  .container {
    margin: 0;
    padding: 24px;
    border-radius: 4px;
    background: #fff;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: 21px;
  }
  table td {
    padding: 0;
  }
  & > table > tbody {
    margin-top: 21px;
  }
  table tbody th {
    padding: 10px 0;
  }
  table th {
    color: #999;
    font-size: 14px;
    font-weight: 700;
    border: 0;
    padding: 0;
  }
  .breakline {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .payment {
    color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > button {
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      font-family: Open Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      padding: 11px 32px;
      border-radius: 4px;
      background: #009edd;
      height: 40px;
      font-family: "Open sans";
      border: 0;
      width: 235.422px;
      cursor: pointer;
    }
  }
  .info {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .label {
    width: 61.471px;
    color: #999;
    font-size: 14px;
    font-weight: 700;
  }
  .price {
    width: 130.79px;
    color: #2f2e41;
    font-size: 24px;
    font-weight: 700;
  }
  .movieTitle {
    color: #2f2e41;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    text-transform: none;
  }
  .moviePrice {
    color: #2f2e41;
    font-size: 16px;
    font-weight: 700;
  }
  .deleteIcon {
    & > svg {
      color: #009edd;
    }
  }
  .movieQuantity {
    display: flex;
    flex-direction: row;
    gap: 11px;
    align-items: center;
    height: 100%;
    svg {
      color: #009edd;
    }
    span {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      width: 62px;
      padding: 0 16px;
      justify-content: center;
      align-items: flex-start;
    }
  }
`;

export default function Cart() {
  const { products: cart, total } = useSelector(
    (state: RootState) => state.cart
  );

  const router = useRouter();
  const { products } = useSelector((state: RootState) => state.movies);
  const dispatch = useAppDispatch();

  const checkout = () => {
    dispatch(clearCart());
    router.push("/checkout");
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="container">
          {total === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Produto</TableCell>
                      <TableCell align="left"></TableCell>
                      <TableCell align="left">QTD</TableCell>
                      <TableCell align="left">SUBTOTAL</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart
                      .filter((item) => item.quantity > 0)
                      .map((movie) => {
                        const selected: MovieType = products?.find(
                          (item) => item.id === movie.id
                        ) || {
                          id: 0,
                          image: "",
                          price: 0,
                          title: "",
                        };
                        return <ListItem key={movie.id} movie={selected} />;
                      })}
                  </TableBody>
                </Table>
              </TableContainer>

              <hr />
              <div className="payment">
                <button onClick={() => checkout()}>Finalizar pedido</button>
                <div className="info">
                  <span className="label">Total</span>
                  <span className="price">{ConvertToBrl(total)}</span>
                </div>
              </div>
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

function ListItem({ movie }: { movie: MovieType }) {
  const { products: cart, total } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();
  const itemOnCart = cart.find((item) => item.id === movie.id);

  const sumFromCart = () => {
    dispatch(addMovie(movie));
  };

  const removeFromCart = () => {
    dispatch(removeMovie({ id: movie.id, price: movie.price }));
  };

  const deleteMovie = () => {
    dispatch(removeAllMovies(movie));
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Image src={movie.image} width={89} height={114} alt="movie cover" />
      </TableCell>
      <TableCell align="left">
        <p className="movieTitle">{movie.title}</p>
        <p className="moviePrice">{ConvertToBrl(movie.price)}</p>
      </TableCell>
      <TableCell align="left">
        <div className="movieQuantity">
          <RemoveCircleOutlineIcon onClick={() => removeFromCart()} />
          <span>{itemOnCart?.quantity}</span>
          <AddCircleOutlineIcon onClick={() => sumFromCart()} />
        </div>
      </TableCell>
      <TableCell align="left" className="moviePrice">
        {ConvertToBrl(movie.price * (itemOnCart?.quantity || 1))}
      </TableCell>
      <TableCell align="right" className="deleteIcon">
        <DeleteIcon onClick={() => deleteMovie()} fontSize="medium" />
      </TableCell>
    </TableRow>
  );
}

const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 64px;
  gap: 32px;

  & > h1 {
    color: #2f2e41;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }

  & > button {
    border-radius: 4px;
    background: #009edd;
    border: 0;
    width: 180px;
    height: 40px;
    flex-shrink: 0;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
  }
`;

function EmptyCart() {
  const router = useRouter();
  return (
    <EmptyContainer>
      <h1>Parece que não há nada por aqui :( </h1>
      <Image src={Empty} alt="Woman waiting" />
      <button onClick={() => router.push("/")}>Voltar</button>
    </EmptyContainer>
  );
}
