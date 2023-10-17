import Tema from './Produto';
import Usuario from './Usuario';

export default interface Medicamentos {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
  usuario: Usuario | null;
}