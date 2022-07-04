import * as S from "./styles";
import { CarouselComponent } from "../../components/Generic/Carousel";
import { BaseContainer } from "../../utils/Layout/BaseContainer";
import { CardProduct } from "../../components/Generic/CardProduct";
import { CardProductButton } from "../../components/Generic/CardProductHoverButton";
import { api } from "../../service/api";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";

export default function LandingPage() {
  const [produtos, setProdutos] = useState<any>();
  const { userType } = useContext(AuthContext);
  console.log(userType)
  const getProdutos = () => {
    api
      .get("produtos")
      .then((response) => {
        setProdutos(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var products = [
    {
      id: 1,
      codigo: "1",
      nome: "Femina",
      valor: 12.5,
      categoria: {},
      modelo: {},
      fornecedor: {},
      marca: {},
      cor: {},
      tamanho: "P",
      descricao: "teste",
      destaque: false,
      imagem:
        "https://static1.purepeople.com.br/articles/3/28/31/53/@/3216979-lingerie-branca-rosa-vermelha-ou-amare-624x600-2.jpg",
    },
    {
      id: 2,
      codigo: "2",
      nome: "Femina2",
      valor: 12.5,
      categoria: {},
      modelo: {},
      fornecedor: {},
      marca: {},
      cor: {},
      tamanho: "P",
      descricao: "teste",
      destaque: false,
      imagem:
        "https://static1.purepeople.com.br/articles/3/28/31/53/@/3216979-lingerie-branca-rosa-vermelha-ou-amare-624x600-2.jpg",
    },
    {
      id: 3,
      codigo: "3",
      nome: "Femina3",
      valor: 12.5,
      categoria: {},
      modelo: {},
      fornecedor: {},
      marca: {},
      cor: {},
      tamanho: "P",
      descricao: "teste",
      destaque: false,
      imagem:
        "https://static1.purepeople.com.br/articles/3/28/31/53/@/3216979-lingerie-branca-rosa-vermelha-ou-amare-624x600-2.jpg",
    },
    {
      id: 4,
      codigo: "4",
      nome: "Calcinha Olinda",
      valor: 12.5,
      categoria: {},
      modelo: {},
      fornecedor: {},
      marca: {},
      cor: {},
      tamanho: "P",
      descricao: "teste",
      destaque: false,
      imagem:
        "https://static1.purepeople.com.br/articles/3/28/31/53/@/3216979-lingerie-branca-rosa-vermelha-ou-amare-624x600-2.jpg",
    },
    {
      id: 5,
      codigo: "5",
      nome: "Calcinha Olinda",
      valor: 12.5,
      categoria: {},
      modelo: {},
      fornecedor: {},
      marca: {},
      cor: {},
      tamanho: "P",
      descricao: "teste",
      destaque: false,
      imagem:
        "https://static1.purepeople.com.br/articles/3/28/31/53/@/3216979-lingerie-branca-rosa-vermelha-ou-amare-624x600-2.jpg",
    },
    {
      id: 6,
      codigo: "6",
      nome: "Calcinha Olinda",
      valor: 12.5,
      categoria: {},
      modelo: {},
      fornecedor: {},
      marca: {},
      cor: {},
      tamanho: "P",
      descricao: "teste",
      destaque: false,
      imagem:
        "https://static1.purepeople.com.br/articles/3/28/31/53/@/3216979-lingerie-branca-rosa-vermelha-ou-amare-624x600-2.jpg",
    },
  ];

  var items = [
    {
      name: "Femina",
      img_src: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      url: "",
    },
    {
      name: "",
      img_src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
      url: "",
    },
    {
      name: "teste",
      img_src: "https://picsum.photos/1024/480/?image=54",
      url: "",
    },
  ];

  var items2 = [
    {
      name: "Coleção Primavera Verão",
      img_src: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      url: "",
    },
    {
      name: "Coleção Inverno",
      img_src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
      url: "",
    },
    {
      name: "Coleção Outono",
      img_src: "https://picsum.photos/1024/480/?image=54",
      url: "",
    },
  ];

  return (
    <>
      <CarouselComponent listItems={items} buttonEnabled={true} />
      <S.Container>
        <S.RowProduct>
          {products.slice(0, 5).map((product, i) => (
            <div key={product.id}>
              <CardProduct
                productPhoto={product.imagem}
                name={product.nome}
                price={product.valor}
              />
            </div>
          ))}
        </S.RowProduct>
      </S.Container>
      <CarouselComponent
        listItems={items2}
        buttonEnabled={false}
        indicators={false}
      />
      <S.Container>
        <S.ProductArea>
          <S.TextTitle>Nossos Produtos</S.TextTitle>
          <S.GridProduct>
            {products.map((product, i) => (
              <S.CardArea key={product.id}>
                <CardProductButton
                  productPhoto={product.imagem}
                  name={product.nome}
                  price={product.valor}
                />
              </S.CardArea>
            ))}
          </S.GridProduct>
        </S.ProductArea>
      </S.Container>
    </>
  );
}
