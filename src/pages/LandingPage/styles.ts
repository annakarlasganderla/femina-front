import { Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const RowProduct = styled.div`
  width: 100%;
  heigth: 15rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2px;
`;

export const ProductArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const GridProduct = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 50px 20px;
`;

export const CardArea = styled.div`
  display: flex;
  flex: 1 1 25%;
  justify-content: center;
  box-sizing: border-box;
  margin: 20px;
`;

export const TextTitle = styled(Typography)`
  &&& {
    padding: 0 2%;
    color: #000000;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;
