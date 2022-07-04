import React from "react";
import Carousel from "react-material-ui-carousel";
import * as S from './styles';

export function CarouselComponent() {

    var items = [
        {
          name: "Femina",
          img_src: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
          url: ""
        },
        {
          name: "",
          img_src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
          url: ""
        },
        {
          name: "teste",
          img_src: "https://picsum.photos/1024/480/?image=54",
          url: ""
        }
      ];
      
    return (
        <Carousel
          next={() => { }}
          prev={() => { }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
    );
};

function Item(props: any) {
    return (
        <S.StyledPaper>
            <S.BoxArea>
                <S.SlideArea>
                    <S.TextTitle>{props.item.name}</S.TextTitle>
                </S.SlideArea>
                <S.ButtonArea>
                    <S.StyledButton>Saiba Mais</S.StyledButton>
                </S.ButtonArea>
            </S.BoxArea>
            <S.StyledImagem src={props.item.img_src} />
        </S.StyledPaper>
    );
};