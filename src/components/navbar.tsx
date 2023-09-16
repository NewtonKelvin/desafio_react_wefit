"use client";
import { RootState } from "@/app/store";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Link from "next/link";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MyNavbar = styled.div`
  height: 74px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 18px 10px;
  justify-content: space-between;
  margin-bottom: 24px;
  & > span {
    font-size: 25px;
    font-weight: 700;
  }
  .brand {
    font-size: 20px;
    font-weight: 700;
  }
  .carrinho {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    & > svg {
      font-size: 32px;
    }
  }
  .information {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-weight: 600;
  }
  .text {
    font-size: 14px;
  }
  .value {
    color: #999;
    font-size: 12px;
  }
  .link {
    cursor: pointer;
  }
`;

export default function Navbar() {
  const { quantity: itemsOnCart } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <MyNavbar>
      <span className="brand link">
        <Link href={"/"}>WeMovies</Link>
      </span>
      <Link href={"/cart"} className="link">
        <div className="carrinho">
          <div className="information">
            <span className="text">Meu Carrinho</span>
            <span className="value">{itemsOnCart} itens</span>
          </div>
          <ShoppingBasketIcon />
        </div>
      </Link>
    </MyNavbar>
  );
}
