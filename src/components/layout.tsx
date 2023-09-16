"use client";
import { Container } from "@mui/material";
import { styled } from "styled-components";

const MyLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  .container {
    height: 100%;
    max-width: 960px;
    padding: 0;
  }
  & > div.content {
    flex-grow: 1;
  }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MyLayout>
      <Container className="container">{children}</Container>
    </MyLayout>
  );
}
