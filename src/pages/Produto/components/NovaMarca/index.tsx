import * as S from "./styles";
import { Modal } from "../../../../components/Generic/Modal";
import { TextFieldComponent } from "../../../../components/Generic/TextField";
import { ButtonComponent } from "../../../../components/Generic/Button";
import { MarcaProps } from "../../../../interfaces/Marca";

interface NovaMarcaProps {
  openModal: boolean;
  handleCloseModal: () => void;
  marcaObj: MarcaProps;
  setMarcaObj: React.Dispatch<React.SetStateAction<MarcaProps>>;
  postMarca: () => void;
}

export const ModalNovaMarca = ({
  openModal,
  handleCloseModal,
  marcaObj,
  setMarcaObj,
  postMarca
}: NovaMarcaProps) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      width="30%"
      title="Nova marca"
      fontSize="1rem"
    >
      <TextFieldComponent
        label="Nome da marca"
        style={{ width: "100%" }}
        onChange={({ target }) => {
          setMarcaObj({ ...marcaObj, nome: target.value });
        }}
      />

      <S.ButtonArea>
        <ButtonComponent title="Cancelar" themeColor="#9B4A46" onClick={() => handleCloseModal()} />
        <ButtonComponent title="Cadastrar" onClick={() => postMarca()} />
      </S.ButtonArea>
    </Modal>
  );
};
