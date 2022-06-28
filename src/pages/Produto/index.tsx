import { BaseContainer } from "../../utils/Layout/BaseContainer";
import { TextFieldComponent } from "../../components/Generic/TextField";
import { Select } from "../../components/Generic/Select";
import { Option } from "../../components/Generic/Select/styles";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  RadioGroup,
} from "@mui/material";
import { RadioButton } from "../../components/Generic/RadioButton";

import * as S from "./styles";

export default function Produtos() {
  return (
    <BaseContainer>
      <S.Container>
        <TextFieldComponent label="Nome do produto" style={{ width: "99%" }} />

        <S.TextContainer>
          <div>
            <TextFieldComponent label="Código" style={{ width: "25rem" }} />
          </div>

          <div>
            <TextFieldComponent
              label="Preço"
              type="number"
              style={{ width: "25rem" }}
            />
          </div>
        </S.TextContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Marca"} style={{ width: "25rem" }}>
              <Option>teste</Option>
            </Select>
            <S.LinkContainer>
              <S.StyledLink>+ Nova Marca</S.StyledLink>
            </S.LinkContainer>
          </div>

          <div>
            <Select label={"Modelo"} style={{ width: "25rem" }}>
              <Option>teste</Option>
            </Select>
            <S.LinkContainer>
              <S.StyledLink>+ Novo Modelo</S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Categoria"} style={{ width: "25rem" }}>
              <Option>teste</Option>
            </Select>
            <S.LinkContainer>
              <S.StyledLink>+ Nova Categoria</S.StyledLink>
            </S.LinkContainer>
          </div>

          <div>
            <Select label={"Fornecedor"} style={{ width: "25rem" }}>
              <Option>teste</Option>
            </Select>
            <S.LinkContainer>
              <S.StyledLink>+ Novo Fornecedor</S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Cor"} style={{ width: "25rem" }}>
              <Option>teste</Option>
            </Select>
            <S.LinkContainer>
              <S.StyledLink>+ Nova Cor</S.StyledLink>
            </S.LinkContainer>
          </div>

          <div>
            <Select label={"Tamanho"} style={{ width: "25rem" }}>
              <Option>teste</Option>
            </Select>
            <S.LinkContainer>
              <S.StyledLink>+ Novo Tamanho</S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>
      </S.Container>
    </BaseContainer>
  );
}
