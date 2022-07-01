import * as S from "./styles";
import { Modal } from "../../../../components/Generic/Modal";
import { TextFieldComponent } from "../../../../components/Generic/TextField";
import { ButtonComponent } from "../../../../components/Generic/Button";
import { CategoriaProps } from "../../../../interfaces/Categoria";

interface NovaCategoriaProps {
  openModalCategoria: boolean;
  handleCloseModalCategoria: () => void;
  categoriaObj: CategoriaProps;
  setCategoriaObj: React.Dispatch<React.SetStateAction<CategoriaProps>>;
  postCategoria: () => void;
}

export const ModalNovaCategoria = ({
  openModalCategoria,
  handleCloseModalCategoria,
  categoriaObj,
  setCategoriaObj,
  postCategoria,
}: NovaCategoriaProps) => {
  return (
    <Modal
      open={openModalCategoria}
      onClose={handleCloseModalCategoria}
      width="30%"
      title="Nova categoria"
      fontSize="1rem"
    >
      <TextFieldComponent
        label="Nome da categoria"
        style={{ width: "100%" }}
        onChange={({ target }) => {
          setCategoriaObj({ ...categoriaObj, nome: target.value });
        }}
      />

      <S.ButtonArea>
        <ButtonComponent title="Cancelar" themeColor="#9B4A46" onClick={() => handleCloseModalCategoria()} />
        <ButtonComponent title="Cadastrar" onClick={() => postCategoria()} />
      </S.ButtonArea>
    </Modal>
  );
};
