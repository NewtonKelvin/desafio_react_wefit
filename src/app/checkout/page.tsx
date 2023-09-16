"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { Box, Grid } from "@mui/material";
import CheckOut from "../../../public/checkout.svg";

const Container = styled.div`
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
`;

const CheckoutContainer = styled.div`
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
    text-transform: none;
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
    cursor: pointer;
  }
`;

export default function Checkout() {
  const router = useRouter();
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="container">
          <CheckoutContainer>
            <h1>Compra realizada com sucesso!</h1>
            <Image src={CheckOut} alt="Woman waiting" />
            <button onClick={() => router.push("/")}>Voltar</button>
          </CheckoutContainer>
        </Grid>
      </Box>
    </Container>
  );
}
