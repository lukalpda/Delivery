import { Categoria } from './categoria.interface';

export interface Manufacturado {
  id_artManuf: number;
  nombre_articuloM: string;
  minutosPrep: number;
  foto: string;
  detalle: string;
  enMenu: boolean;
  categoriaManuf: Categoria;
  precio: number;
}
 