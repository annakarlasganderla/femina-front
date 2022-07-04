import * as S from "./styles";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillFacebook } from "react-icons/ai";
const logo =  require("../../../public/logo.png")

export const Footer = () => {
    return (
    <footer>
        <S.FooterContainer>
            <S.InfoArea> 
                <S.TextTitle>Endereço</S.TextTitle>
                <S.TextContent>
                    <S.TextParagraph>Rua Rui Barbosa, n°2050</S.TextParagraph>
                    <S.TextParagraph>Centro, Itaipulândia -Pr</S.TextParagraph>
                    <S.TextParagraph>CEP: 85880-000</S.TextParagraph>
                </S.TextContent>
            </S.InfoArea>  
            <S.ImageArea src={logo} alt="Logo" />
            <S.InfoArea>
                <S.TextTitle>Entre em contato conosco</S.TextTitle>
                <S.TextContent>
                    <S.ContactArea>
                        <AiOutlineInstagram color="white" size="10px" />
                        <S.TextParagraph>@femina_modaintima</S.TextParagraph>
                    </S.ContactArea>
                    <S.ContactArea>
                        <AiOutlineWhatsApp color="white" size="10px" />
                        <S.TextParagraph>(45) 9 9984-6175</S.TextParagraph>
                    </S.ContactArea>
                    <S.ContactArea>
                        <AiFillFacebook color="white" size="10px" />
                        <S.TextParagraph>facebook/femina_modaintima</S.TextParagraph>
                    </S.ContactArea>
                </S.TextContent>
            </S.InfoArea>
            
        </S.FooterContainer>
        
    </footer>
    )
}