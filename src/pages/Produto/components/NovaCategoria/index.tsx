import * as S from "./styles";
import { Modal } from "../../../../components/Generic/Modal";
import { TextFieldComponent } from "../../../../components/Generic/TextField";
import { ButtonComponent } from "../../../../components/Generic/Button";
import { useState } from "react";

interface NovaCategoriaProps {
  openModalCategoria: boolean;

  handleCloseModalCategoria: () => void;
}

export const ModalNovaCategoria = ({
    openModalCategoria,
    handleCloseModalCategoria,
}: NovaCategoriaProps) => {
  return (
    <Modal
      open={openModalCategoria}
      onClose={handleCloseModalCategoria}
      width="30%"
      title="Nova categoria"
      fontSize="1rem"
    >
      <TextFieldComponent label="Nome da categoria" style={{ width: "100%" }} />

      <S.ButtonArea>
        <ButtonComponent title="Cancelar" themeColor="#9B4A46"/>
        <ButtonComponent title="Cadastrar"/>
      </S.ButtonArea>
    </Modal>
  );
};
