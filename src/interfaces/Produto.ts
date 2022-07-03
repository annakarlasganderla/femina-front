import { CorProps } from "./Cor";
import { CategoriaProps } from "./Categoria";
import { FornecedorProps } from "./Fornecedor";
import { MarcaProps } from "./Marca";
import { ModeloProps } from "./Modelo";

export interface ProdutoProps {
  id?: number;
  cadastrado?: Date | string;
  atualizado?: Date | string;
  nome?: string;
  codigo?: string;
  valor?: number;
  categoria?: CategoriaProps | null;
  modelo?: ModeloProps | null;
  fornecedor?: FornecedorProps | null;
  marca?: MarcaProps | null;
  cor?: CorProps | null;
  tamanho?: string;
  descricao?: string;
  destaque?: boolean;
}
