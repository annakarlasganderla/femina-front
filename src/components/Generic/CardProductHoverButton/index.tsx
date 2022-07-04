import React, { MouseEventHandler } from "react";
import * as S from "./styles";

interface ProdutoProps {
  productPhoto?: string;
  productPhotoDescription?: string;
  name?: string;
  price?: number;
  onClickButton?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const CardProductButton = ({
  productPhoto,
  name,
  price,
  productPhotoDescription,
  onClickButton,
}: ProdutoProps) => {
  const [show, setShow] = React.useState(false);
  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };
  return (
    <S.Container 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <S.ImageArea>
        <S.StyledImage src={productPhoto} alt={productPhotoDescription} />
        <S.StyledButton 
            onClick={onClickButton} 
            style={{ display: show ? 'block' : 'none' }}
        >Detalhar</S.StyledButton>
      </S.ImageArea>
      <S.TextArea>
        <S.TextTitle>{name}</S.TextTitle>
        <S.TextPrice>{price?.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</S.TextPrice>
      </S.TextArea>
    </S.Container>
  );
};
