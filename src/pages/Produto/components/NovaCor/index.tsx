import * as S from "./styles";
import { Modal } from "../../../../components/Generic/Modal";
import { TextFieldComponent } from "../../../../components/Generic/TextField";
import { ButtonComponent } from "../../../../components/Generic/Button";
import { CorProps } from "../../../../interfaces/Cor";

interface NovaCorProps {
  openModalCor: boolean;
  handleCloseModal: () => void;
  corObj: CorProps;
  setCorObj: React.Dispatch<React.SetStateAction<CorProps>>;
  postCor: () => void;
}

export const ModalNovaCor = ({
  openModalCor,
  handleCloseModal,
  corObj,
  setCorObj,
  postCor,
}: NovaCorProps) => {
  return (
    <Modal
      open={openModalCor}
      onClose={handleCloseModal}
      width="30%"
      title="Nova Cor"
      fontSize="1rem"
    >
      <TextFieldComponent
        label="Nome da cor"
        style={{ width: "100%" }}
        onChange={({ target }) => {
          setCorObj({ ...corObj, nome: target.value });
        }}
      />

      <TextFieldComponent
        label="Hexadecimal"
        style={{ width: "100%" }}
        onChange={({ target }) => {
          setCorObj({ ...corObj, hexadecimal: target.value });
        }}
      />

      <S.ButtonArea>
        <ButtonComponent
          title="Cancelar"
          themeColor="#9B4A46"
          onClick={() => handleCloseModal()}
        />
        <ButtonComponent title="Cadastrar" onClick={() => postCor()} />
      </S.ButtonArea>
    </Modal>
  );
};
