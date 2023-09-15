"use client";
import Image from "next/image";
import { styled } from "styled-components";
import LoadingVector from "../../public/loading.svg";

const MyLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 74px);
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export default function Loading() {
  return (
    <MyLayout>
      <Image src={LoadingVector} alt="Loading" />
    </MyLayout>
  );
}
