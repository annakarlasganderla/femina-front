import { InputLabel, MenuItem, Select } from "@mui/material";
import { setThemeColor } from "../../../utils/components/Generic";
import styled, { css } from "styled-components";

export const SelectWrapper = styled(Select)`
  &&& {
    background: white;
    color: #9b4a46;
    font-size: 1.4rem;

    &::after {
      border-color: #9b4a46;
      font-size: 1.4rem;

      font-family: Roboto;
    }
  }
`;

interface InputLabelProps {
  themeColor: string;
  requiredType?: string | boolean;
}

export const SelectLabel = styled(InputLabel)<InputLabelProps>`
  &&& {
    ${({ requiredType }) => css`
      font-family: Roboto;
      margin-top: 0.3rem;
      font-size: 1.4rem;

      &.MuiInputLabel-filled {
        color: #7a0000;
      }

      &.MuiInputLabel-filled.Mui-focused {
        color: #9b4a46;
      }

      & .MuiInputLabel-asterisk {
        color: ${() => {
          if (requiredType) {
            switch (requiredType) {
              case "obrigatório":
                return "red";
              case "requerido":
                return "#c2c2c2";
              default:
                return "#c2c2c2";
            }
          }
        }};
      }
    `}
  }
`;

export const Option = styled(MenuItem)`
  &&& {
    font-size: 1rem;
    font-family: Roboto;
  }
`;
