import { BaseContainer } from "../../utils/Layout/BaseContainer";
import { TextFieldComponent } from "../../components/Generic/TextField";
import { Select } from "../../components/Generic/Select";
import { Option } from "../../components/Generic/Select/styles";

import { ModalNovaMarca } from "./components/NovaMarca";
import { ModalNovaCategoria } from "./components/NovaCategoria";
import { ModalNovoModelo } from "./components/NovoModelo";
import { ModalNovaCor } from "./components/NovaCor";
import { ModalNovoFornecedor } from "./components/NovoFornecedor";

import { MarcaProps } from "../../interfaces/Marca";
import { CategoriaProps } from "../../interfaces/Categoria";
import { ModeloProps } from "../../interfaces/Modelo";
import { CorProps } from "../../interfaces/Cor";
import { FornecedorProps } from "../../interfaces/Fornecedor";

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
  const [marcas, setMarcas] = useState<MarcaProps[]>([]);
  const [openModalMarca, setOpenModalMarca] = useState(false);
  const [marcaObj, setMarcaObj] = useState<MarcaProps>(marcaObjInitialState);

  const categoriaObjInitialState = {
    nome: "",
  };
  const [openModalCategoria, setOpenModalCategoria] = useState(false);
  const [categoriaObj, setCategoriaObj] = useState<CategoriaProps>(
    categoriaObjInitialState
  );
  const [categorias, setCategorias] = useState<CategoriaProps[]>([]);

  const modeloObjInitialState = {
    nome: "",
  };
  const [openModalModelo, setOpenModalModelo] = useState(false);
  const [modeloObj, setModeloObj] = useState<ModeloProps>(
    modeloObjInitialState
  );
  const [modelos, setModelos] = useState<ModeloProps[]>([]);

  const corObjInitialState = {
    nome: "",
    hexadecimal: "",
  };
  const [openModalCor, setOpenModalCor] = useState(false);
  const [corObj, setCorObj] = useState<CorProps>(corObjInitialState);
  const [cores, setCores] = useState<CorProps[]>([]);

  const fornecedorObjInitialState = {
    name: "",
    cnpj: "",
    telefone: "",
    numero: "",
    email: "",
    cep: "",
    estado: "",
    logradouro: "",
    cidade: "",
    pais: "",
  };
  const [fornecedorObj, setFornecedorObj] = useState<FornecedorProps>(
    fornecedorObjInitialState
  );
  const [fornecedores, setFornecedores] = useState<FornecedorProps[]>([]);
  const [openModalFornecedor, setOpenModalFornecedor] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSettings, setAlertSettings] = useState<AlertSettingsProps>({
    message: "",
    type: "success",
  });

  const postCor = () => {
    const corObjFinal = {
      ...corObj,
    };
    api
      .post("cores", corObjFinal)
      .then((response) => {
        console.log(response);
        setAlertSettings({
          message: "Cor cadastrada com sucesso!",
          type: "success",
        });
        setOpenModalCor(false);
        getCores();
      })
      .catch((error) => {
        console.log(error);
        setAlertSettings({
          message: "Erro ao cadastrar cor!",
          type: "error",
        });
      })
      .finally(() => {
        setOpenAlert(true);
      });
  };

  const postModelo = () => {
    const modeloObjFinal = {
      ...modeloObj,
    };
    api
      .post("modelos", modeloObjFinal)
      .then((response) => {
        console.log(response);
        setAlertSettings({
          message: "Modelo cadastrado com sucesso!",
          type: "success",
        });
        setOpenModalModelo(false);
        getModelos();
      })
      .catch((error) => {
        console.log(error);
        setAlertSettings({
          message: "Erro ao cadastrar modelo!",
          type: "error",
        });
      })
      .finally(() => {
        setOpenAlert(true);
      });
  };

  const postCategoria = () => {
    const catObjFinal = {
      ...categoriaObj,
    };
    api
      .post("categorias", catObjFinal)
      .then((response) => {
        console.log(response);
        setAlertSettings({
          message: "Categoria cadastrada com sucesso!",
          type: "success",
        });
        setOpenModalCategoria(false);
        getCategorias();
      })
      .catch((error) => {
        console.log(error);
        setAlertSettings({
          message: "Erro ao cadastrar categoria!",
          type: "error",
        });
      })
      .finally(() => {
        setOpenAlert(true);
      });
  };

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

  const postFornecedor = () => {
    const fornecedorObjFinal = {
      ...fornecedorObj,
    };
    api
      .post("fornecedores", fornecedorObjFinal)
      .then((response) => {
        console.log(response);
        setAlertSettings({
          message: "Fornecedor cadastrado com sucesso!",
          type: "success",
        });
        setOpenModalFornecedor(false);
        getFornecedores();
      })
      .catch((error) => {
        console.log(error);
        setAlertSettings({
          message: "Erro ao cadastrar fornecedor!",
          type: "error",
        });
      })
      .finally(() => {
        setOpenAlert(true);
      });
  }

  const getCores = () => {
    api
      .get("cores")
      .then((response) => {
        setCores(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getModelos = () => {
    api
      .get("modelos")
      .then((response) => {
        setModelos(response.data.content);
      })
      .catch((error) => {
        console.log(error);
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

  const getCategorias = () => {
    api
      .get("categorias")
      .then((response) => {
        setCategorias(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFornecedores = () => {
    api
      .get("fornecedores")
      .then((response) => {
        setFornecedores(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMarcas();
    getCategorias();
    getModelos();
    getCores();
    getFornecedores();
  }, []);

  return (
    <BaseContainer>
      <S.Container>
        <TextFieldComponent label="Nome do produto" style={{ width: "100%" }} />

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
            <Select label={"Marca"} style={{ width: "57rem" }}>
              {marcas.map((marcas) => (
                <Option key={marcas.id} value={marcas.nome}>
                  {marcas.nome}
                </Option>
              ))}
            </Select>
            <S.LinkContainer>
              <S.StyledLink onClick={() => setOpenModalMarca(true)}>
                + Nova Marca
              </S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Modelo"} style={{ width: "57rem" }}>
              {modelos.map((modelo) => (
                <Option key={modelo.id} value={modelo.nome}>
                  {modelo.nome}
                </Option>
              ))}
            </Select>
            <S.LinkContainer>
              <S.StyledLink onClick={() => setOpenModalModelo(true)}>
                + Novo Modelo
              </S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Categoria"} style={{ width: "57rem" }}>
              {categorias.map((categoria) => (
                <Option key={categoria.id} value={categoria.nome}>
                  {categoria.nome}
                </Option>
              ))}
            </Select>
            <S.LinkContainer>
              <S.StyledLink onClick={() => setOpenModalCategoria(true)}>
                + Nova Categoria
              </S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Cor"} style={{ width: "57rem" }}>
              {cores.map((cores) => (
                <Option key={cores.id} value={cores.nome}>
                  {cores.nome}
                </Option>
              ))}
            </Select>
            <S.LinkContainer>
              <S.StyledLink onClick={() => setOpenModalCor(true)}>
                + Nova Cor
              </S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Fornecedor"} style={{ width: "57rem" }}>
              {fornecedores.map((fornecedores) => (
                <Option key={fornecedores.id} value={fornecedores.name}>
                  {fornecedores.name}
                </Option>
              ))}
            </Select>
            <S.LinkContainer>
              <S.StyledLink onClick={() => setOpenModalFornecedor(true)}>
                + Novo Fornecedor
              </S.StyledLink>
            </S.LinkContainer>
          </div>
        </S.FilterContainer>

        <S.FilterContainer>
          <div>
            <Select label={"Tamanho"} style={{ width: "57rem" }}>
              <Option key={1} value={"pp"}>
                PP
              </Option>
              <Option key={2} value={"p"}>
                P
              </Option>
              <Option key={3} value={"m"}>
                M
              </Option>
              <Option key={4} value={"g"}>
                G
              </Option>
              <Option key={5} value={"gg"}>
                GG
              </Option>
            </Select>
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
        categoriaObj={categoriaObj}
        setCategoriaObj={setCategoriaObj}
        postCategoria={postCategoria}
      />
      <ModalNovoModelo
        openModalModelo={openModalModelo}
        handleCloseModalModelo={() => setOpenModalModelo(false)}
        modeloObj={modeloObj}
        setModeloObj={setModeloObj}
        postModelo={postModelo}
      />
      <ModalNovaCor
        openModalCor={openModalCor}
        handleCloseModal={() => setOpenModalCor(false)}
        corObj={corObj}
        setCorObj={setCorObj}
        postCor={postCor}
      />
      <ModalNovoFornecedor
        openModalFornecedor={openModalFornecedor}
        handleCloseModalFornecedor={() => setOpenModalFornecedor(false)}
        fornecedorObj={fornecedorObj}
        setFornecedorObj={setFornecedorObj}
        postFornecedor={postFornecedor}
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
