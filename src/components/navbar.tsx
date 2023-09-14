"use client";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import styled from "styled-components";

const MyNavbar = styled.div`
  width: 100dvh;
  max-width: 960px;
  height: 74px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 18px 10px;
  justify-content: space-between;
  & > span {
    font-size: 25px;
    font-weight: 700;
  }
  .carrinho {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    & > svg {
      height: 32px;
    }
    & > .information {
      display: flex;
      flex-direction: column;
      text-align: right;
      font-weight: 600;
      & > .text {
        font-size: 14px;
      }
      & > .value {
        color: #999;
        font-size: 12px;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <MyNavbar>
      <span>WeMovies</span>
      <div className="carrinho">
        <div className="information">
          <span className="text">Meu carrinho</span>
          <span className="value">0 itens</span>
        </div>
        <ShoppingBasketIcon />
      </div>
    </MyNavbar>
  );
}
