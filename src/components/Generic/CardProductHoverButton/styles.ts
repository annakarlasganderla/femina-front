import { Typography, Box, Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 200px;
  max-height: 175px;
  gap: 5px;
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    img {
      webkit-filter: blur(3px);
      filter: blur(2px);
    }
  }
`;

export const StyledButton = styled(Button)<ButtonProps>`
  position: absolute;
  width: 85px;
  height: 30px;
  background: #d4a9a7;
  color: #000000;
  font-family: "Roboto";
  font-height: 400;
  font-size: 10px;
  line-height: 15px;
  transition: all 0.8s;
  &:hover {
    background: #a77371;
  }
`;

export const StyledImage = styled.img`
  max-width: 200px;
  max-height: 175px;
  border-radius: 3px;
  transition: all 0.8s ease-out;
`;

export const TextArea = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 10px;
`;

export const TextTitle = styled(Typography)`
  &&& {
    color: #000000;
    font-family: Roboto;
    font-weight: medium;
    font-size: 1.4rem;
    line-height: 15px;
  }
`;

export const TextPrice = styled(Typography)`
  &&& {
    color: #00000099;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1rem;
    line-height: 15px;
  }
`;
