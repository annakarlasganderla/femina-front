import { Typography, Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  max-height: 235px;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 175px;
  border-radius: 3px 3px 0 0;
`;

export const TextArea = styled.div`
  width: 100%;
  height: 60px;
  background: #9b4a46;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const TextTitle = styled.h1`
  
    color: #fff;
    font-family: Roboto;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 15px;

`;

export const TextPrice = styled(Typography)`
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
`;
