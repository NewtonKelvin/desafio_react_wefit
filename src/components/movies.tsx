import { useCart } from "@/context/cartContext";
import { CartActions } from "@/types/cart";
import { MovieType } from "@/types/movie";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Grid } from "@mui/material";
import "dotenv/config";
import Image from "next/image";
import styled from "styled-components";

const MyMovie = styled.div`
  width: 100%;
  height: 100%;
  .content {
    align-items: flex-start;
    display: flex;
    gap: 16px;
    position: relative;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 11px;
    color: #000;
    border-radius: 4px;
    background: #fff;
    gap: 8px;
  }
  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > img {
      margin-bottom: 7px;
    }
  }
  .movieTitle {
    margin-bottom: 2px;
    font-size: 12px;
    font-weight: 700;
  }
  .moviePrice {
    font-size: 16px;
    font-weight: 700;
  }
  .button {
    width: 100%;
  }

  .button > button {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 0;
    padding: 8px;
    background: #009edd;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
  }

  .buttonInfo {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
    gap: 3.4px;
    svg {
      width: 13px;
      height: 13px;
      bottom: 0;
    }
  }

  .buttonText {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .buttonQuantity {
    font-size: 12px;
    font-weight: 400;
  }
`;

type Props = Readonly<{
  movie: MovieType;
}>;

export default function Movies({ movie }: Props) {
  const { id, image, price, title } = movie;
  const { dispatch, state } = useCart();

  const AddToCart = (movie: MovieType) => {
    dispatch({ type: CartActions.ADD_MOVIE, payload: movie });
  };
  return (
    <Grid item xs={2} sm={4} md={4}>
      <MyMovie>
        <div className="card">
          <div className="information">
            <Image
              src={image}
              width={147}
              height={188}
              alt={`Capa do filme ${title}`}
            />
            <span className="movieTitle">{title}</span>
            <span className="moviePrice">
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <div className="button">
            <button type="button" onClick={() => AddToCart(movie)}>
              <span className="buttonInfo">
                <AddShoppingCartIcon />
                <span className="buttonQuantity">0</span>
              </span>
              <span className="buttonText">Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      </MyMovie>
    </Grid>
  );
}
