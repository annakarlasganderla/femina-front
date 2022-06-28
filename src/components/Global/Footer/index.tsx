import * as S from "./styles"
export const Footer = () => {
    return (
    <footer>
        <S.FooterContainer>
            <div className="Endereço"> 
                <div>
                    <h2>Endereço</h2>
                </div>
            <div className="Imagem">  
                <div>
                    <img src="logo.jpg" alt="Logo.Footer" />
                </div>
                </div>
            <div className="Contato">
                    <h2>Entre em contato conosco</h2>
                </div>
            </div>
        </S.FooterContainer>
        
    </footer>
    )
}