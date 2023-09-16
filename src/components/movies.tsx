import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addMovie } from "@/redux/cartSlice";
import { MovieType } from "@/types/movie";
import ConvertToBrl from "@/utils/convertToBRL";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Grid } from "@mui/material";
import "dotenv/config";
import Image from "next/image";
import { useState } from "react";
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
    align-self: stretch;
    gap: 12px;
    cursor: pointer;
  }

  .button > button.active {
    background: #039b00;
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
    text-align: center;
    justify-content: center;
    width: 157px;
    height: 18px;
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

  const { products } = useAppSelector((state) => state.cart);
  const itemOnCart = products.find((item) => item?.id === movie.id);

  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);

  const AddToCart = () => {
    dispatch(addMovie(movie));
    setAdded(true);
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
            <span className="moviePrice">{ConvertToBrl(price)}</span>
          </div>
          <div className="button">
            <button
              className={`${added && "active"}`}
              type="button"
              onClick={() => AddToCart()}
            >
              <span className="buttonInfo">
                <AddShoppingCartIcon />
                <span className="buttonQuantity">
                  {itemOnCart?.quantity || 0}
                </span>
              </span>
              <span className="buttonText">
                {!added ? "Adicionar ao carrinho" : "Item adicionado"}
              </span>
            </button>
          </div>
        </div>
      </MyMovie>
    </Grid>
  );
}
