import styled, { css } from "styled-components";
import { Paper, Button, Typography, Box } from "@mui/material";

export const StyledPaper = styled(Paper)`
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxArea = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const SlideArea = styled.div`
    width: 80%;
    height: 10rem;
    position: absolute;
    display : flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    color: #fff;
`;

export const ButtonArea = styled.div`
    height: 95%;
    position: absolute;
    display : flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
`;

export const StyledButton = styled(Button)`
    width: 130px;
    height: 28px;
    background: #D4A9A7;
    color: #000000;
    font-family: "Roboto";
    font-height: 400;
    font-size: 12px;
    line-height: 18px;
    &:hover { 
        background: #A77371;
    }
`;

export const TextTitle = styled(Typography)`
    color: #ffffff;
    font-family: "Roboto";
    font-height: 400;
    font-size: 50px;
    line-height: 80px;
`;

export const StyledImagem = styled.img`
    width: 100%;
    max-height: 29rem;
`;