import * as S from "./styles";
import { Modal } from "../../../../components/Generic/Modal";
import { TextFieldComponent } from "../../../../components/Generic/TextField";
import { ButtonComponent } from "../../../../components/Generic/Button";
import { FornecedorProps } from "../../../../interfaces/Fornecedor";

interface NovoFornecedorProps {
  openModalFornecedor: boolean;
  handleCloseModalFornecedor: () => void;
  fornecedorObj: FornecedorProps;
  setFornecedorObj: React.Dispatch<React.SetStateAction<FornecedorProps>>;
  postFornecedor: () => void;
}

export const ModalNovoFornecedor = ({
  openModalFornecedor,
  handleCloseModalFornecedor,
  fornecedorObj,
  setFornecedorObj,
  postFornecedor
}: NovoFornecedorProps) => {
  return (
    <Modal
      open={openModalFornecedor}
      onClose={handleCloseModalFornecedor}
      title="Novo fornecedor"
      variantType="external"
    >
      <S.TextContainer>
        <div>
          <TextFieldComponent
            label="Nome"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, name: target.value });
            }}
          />
        </div>

        <div>
          <TextFieldComponent
            label="CNPJ"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, cnpj: target.value });
            }}
          />
        </div>

        <div>
          <TextFieldComponent
            label="E-mail"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, email: target.value });
            }}
          />
        </div>

        <S.SubTextContainer>
          <TextFieldComponent
            label="Telefone"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, telefone: target.value });
            }}
          />
          <TextFieldComponent
            label="Celular"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, numero: target.value });
            }}
          />
        </S.SubTextContainer>

        <S.SubTextContainer>
          <TextFieldComponent
            label="Cep"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, cep: target.value });
            }}
          />
          <TextFieldComponent
            label="Estado"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, estado: target.value });
            }}
          />
        </S.SubTextContainer>

        <S.SubTextContainer>
          <TextFieldComponent
            label="Cidade"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, cidade: target.value });
            }}
          />
          <TextFieldComponent
            label="Logradouro"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, logradouro: target.value });
            }}
          />
          <TextFieldComponent
            label="País"
            type="text"
            style={{ width: "100%" }}
            onChange={({ target }) => {
              setFornecedorObj({ ...fornecedorObj, pais: target.value });
            }}
          />
        </S.SubTextContainer>
      </S.TextContainer>

      <S.ButtonArea>
        <ButtonComponent title="Cancelar" themeColor="#9B4A46" onClick={handleCloseModalFornecedor} />
        <ButtonComponent title="Cadastrar" onClick={() => postFornecedor()} />
      </S.ButtonArea>
    </Modal>
  );
};
