import * as S from "./styles";

import {AiOutlineUser, AiOutlineUserAdd} from 'react-icons/ai';
import { InputAdornment } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <S.HeaderContainer>
        <div>
          <img src="../../../public/logoProvisoria.png" alt="logo" />
        </div>

        {/* <div>
          <S.StyledTextField
            variant="standard"
            placeholder="O que deseja?"
            InputProps={{
              endAdornment: <InputAdornment position="end">checked</InputAdornment>,
            }}
          />
        </div> */}

        <S.ButtonArea>

          <S.ButtonIcon>
            <S.StyledLink href="#">Login</S.StyledLink>
            <AiOutlineUser color='white' />
          </S.ButtonIcon>

          <S.ButtonIcon>
            <S.StyledLink href="#">Cadastre-se</S.StyledLink>
            <AiOutlineUserAdd color='white' />
          </S.ButtonIcon>

        </S.ButtonArea>
      </S.HeaderContainer>
    </header>
  );
};
