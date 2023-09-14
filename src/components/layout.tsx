"use client";
import { styled } from "styled-components";

const MyLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  & > div.content {
    flex-grow: 1;
  }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MyLayout>{children}</MyLayout>;
}
