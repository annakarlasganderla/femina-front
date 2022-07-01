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
import { ModalNovaMarca } from "./components/NovaMarca";
import { ModalNovaCategoria } from "./components/NovaCategoria";
import { MarcaProps } from "../../interfaces/Marca";
import { Alert } from "../../components/Generic/Alert";
import { api } from "../../service/api";

import * as S from "./styles";
import { useEffect, useState } from "react";

export interface AlertSettingsProps {
  message: string;
  type: "error" | "success" | "info" | "warning";
}

export default function Produtos() {
  const marcaObjInitialState = {
    nome: "",
  };

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSettings, setAlertSettings] = useState<AlertSettingsProps>({
    message: "",
    type: "success",
  });

  const [marcas, setMarcas] = useState<MarcaProps[]>([]);
  const [openModalMarca, setOpenModalMarca] = useState(false);
  const [openModalCategoria, setOpenModalCategoria] = useState(false);
  const [marcaObj, setMarcaObj] = useState<MarcaProps>(marcaObjInitialState);
  console.log(marcas);

  const postMarca = () => {
    const marcaObjFinal = {
      ...marcaObj,
    };
    api
      .post("marcas", marcaObjFinal)
      .then((response) => {
        console.log(response);
        setAlertSettings({
          message: "Marca cadastrada com sucesso!",
          type: "success",
        });
        setOpenModalMarca(false);
        getMarcas();
      })
      .catch((error) => {
        console.log(error);
        setAlertSettings({
          message: "Erro ao cadastrar marca!",
          type: "error",
        });
      })
      .finally(() => {
        setOpenAlert(true);
      });
  };

  const getMarcas = () => {
    api
      .get("marcas")
      .then((response) => {
        setMarcas(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMarcas();
  }, []);

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
              {marcas.map((marcas) => (
                <Option key={marcas.id} value={marcas.nome}>{marcas.nome}</Option>
              ))}
            </Select>
            <S.LinkContainer>
              <S.StyledLink onClick={() => setOpenModalMarca(true)}>
                + Nova Marca
              </S.StyledLink>
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
              <S.StyledLink onClick={() => setOpenModalCategoria(true)}>
                + Nova Categoria
              </S.StyledLink>
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

      <ModalNovaMarca
        openModal={openModalMarca}
        handleCloseModal={() => setOpenModalMarca(false)}
        marcaObj={marcaObj}
        setMarcaObj={setMarcaObj}
        postMarca={postMarca}
      />
      <ModalNovaCategoria
        openModalCategoria={openModalCategoria}
        handleCloseModalCategoria={() => setOpenModalCategoria(false)}
      />

      <Alert
        message={alertSettings.message}
        type={alertSettings.type}
        alertStatus={openAlert}
        setAlertStatus={setOpenAlert}
      />
    </BaseContainer>
  );
}
