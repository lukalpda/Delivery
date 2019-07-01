import { Categoria } from './categoria.interface';

export interface Manufacturado {
  id_artManuf: number;
  nombreManufacturado: string;
  minutosPrep: number;
  foto: string;
  detalle: string;
  enMenu: boolean;
  precioM: number;
  categoriaManuf: Categoria;

}
