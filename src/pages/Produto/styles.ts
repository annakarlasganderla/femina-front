import styled from "styled-components";
import { Link } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";


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
  &&& {
    text-decoration: none;
    color: #7a0000;
    font-size: 1rem;
    font-family: Roboto;
    cursor: pointer;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  gap: 7rem;
  margin: 2rem 0;
`;

export const ButtonArea = styled.div`
  display: flex;
  margin: 2rem 0;
  gap: 2rem;
`;

export const UploadArea = styled.div`
  width: 100%;

  margin: 2rem 4rem;
`;

export const SwitchArea = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;

  h2 { 
    color: #7a0000;
    font-family: Roboto;
  }
`;

export const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 6,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: 'red',
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 20,
      height: 20,
      
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
    
  },
}));

 
