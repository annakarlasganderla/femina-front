import styled from "styled-components"
import { Typography } from "@mui/material";

export const FooterContainer = styled.div`
    display: flex;
    background-color: #7A0000;
    width: 100%;
    height: 8rem;
    align-items: center;
    justify-content: space-around;
`;

export const InfoArea = styled.div`
    display: flex;
    width: 12rem;
    height: 6rem;
    flex-direction: column;
    justify-content: space-around;
`;

export const TextTitle = styled(Typography)`
    color: #ffffff;
    font-style: bold;
    font-family: "Roboto";
    font-height: 700;
    font-size: 15px;
    line-height: 22.5px;
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    gap: 2px 0;
`;

export const TextParagraph = styled(Typography)`
    color: #ffffff;
    font-family: "Roboto";
    font-height: 200;
    font-size: 10px;
    line-height: 15px;
`;

export const ContactArea = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 5px 3px;
`;

export const ImageArea = styled.img`
    width: 9.5rem;
    height: 2.5rem;
`;