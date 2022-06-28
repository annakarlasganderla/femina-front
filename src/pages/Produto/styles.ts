import styled from "styled-components";
import { Link } from "@mui/material";


export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
 
  gap: 7rem;
  margin: 1rem 0;
`;

export const LinkContainer = styled.div`
    margin: 1rem 0;
`;

export const StyledLink = styled(Link)`
    &&&{
        text-decoration: none;
        color: #7A0000;
        font-size: .9rem;
        cursor: pointer;
        
    }
`
export const TextContainer = styled.div`
    display: flex;
    gap: 7rem;
    margin: 2rem 0;
`;
