import * as S from "./styles";
import { Modal } from "../../../../components/Generic/Modal";
import { TextFieldComponent } from "../../../../components/Generic/TextField";
import { ButtonComponent } from "../../../../components/Generic/Button";
import { ModeloProps } from "../../../../interfaces/Modelo";

interface NovaMarcaProps {
  openModalModelo: boolean;
  handleCloseModalModelo: () => void;
  modeloObj: ModeloProps;
  setModeloObj: React.Dispatch<React.SetStateAction<ModeloProps>>;
  postModelo: () => void;
}

export const ModalNovoModelo = ({
  openModalModelo,
  handleCloseModalModelo,
  modeloObj,
  setModeloObj,
  postModelo,
}: NovaMarcaProps) => {
  return (
    <Modal
      open={openModalModelo}
      onClose={handleCloseModalModelo}
      width="30%"
      title="Novo Modelo"
      fontSize="1rem"
    >
      <TextFieldComponent
        label="Nome do Modelo"
        style={{ width: "100%" }}
        onChange={({ target }) => {
          setModeloObj({ ...modeloObj, nome: target.value });
        }}
      />

      <S.ButtonArea>
        <ButtonComponent
          title="Cancelar"
          themeColor="#9B4A46"
          onClick={() => handleCloseModalModelo()}
        />
        <ButtonComponent title="Cadastrar" onClick={() => postModelo()} />
      </S.ButtonArea>
    </Modal>
  );
};
