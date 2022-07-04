import { MouseEventHandler } from "react";
import * as S from "./styles";

interface ProdutoProps {
  productPhoto?: string;
  productPhotoDescription?: string;
  name?: string;
  price?: number;
}

export const CardProduct = ({
  productPhoto,
  name,
  price,
  productPhotoDescription,
}: ProdutoProps) => {
  return (
    <S.Container>
      <S.StyledImage src={productPhoto} alt={productPhotoDescription} />
      <S.TextArea>
        <S.TextTitle>{name}</S.TextTitle>
        <S.TextPrice>{price?.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</S.TextPrice>
      </S.TextArea>
    </S.Container>
  );
};
