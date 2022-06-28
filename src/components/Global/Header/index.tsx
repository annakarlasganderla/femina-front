import * as S from "./styles";

import { AiOutlineUser, AiOutlineUserAdd, AiOutlineMenu } from "react-icons/ai";

import { InputAdornment, Link } from "@mui/material";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { routes } from "../../../utils/Routes";
import Image from 'next/image'


export const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <header>
      <S.HeaderContainer>
        <S.LogoArea>
          <AiOutlineMenu
            color="white"
            cursor="pointer"
            onClick={() => setOpenSideBar(true)}
            size={30}
          />
          <img src="../../../public/logoProvisoria.png" alt="logo" />
        </S.LogoArea>

        <S.StyledDrawer
          anchor={"left"}
          open={openSideBar}
          onClose={() => setOpenSideBar(false)}
        >  
          {routes.map((routes) => (
            <ListItem  key={routes.id}>
              <S.StyledListButton>
                <S.StyledLinkDrawer href={routes.route}>{routes.nome}</S.StyledLinkDrawer>
              </S.StyledListButton>
            </ListItem>
          ))}
        </S.StyledDrawer>

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
            <AiOutlineUser color="white" />
          </S.ButtonIcon>

          <S.ButtonIcon>
            <S.StyledLink href="#">Cadastre-se</S.StyledLink>
            <AiOutlineUserAdd color="white" />
          </S.ButtonIcon>
        </S.ButtonArea>
      </S.HeaderContainer>
    </header>
  );
};
