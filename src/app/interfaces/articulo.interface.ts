import { Categoria } from './categoria.interface';
import { UnidadMedida } from './unidad.medida.interface';

export interface Articulo{
  id_articulo: number;
  nombre_articulo: string;
  costo: number;
  esPrima: boolean;
  stock: number;
  stockMinimo: number;
  enLista: boolean;
  foto: string;
  detalle: string;
  categoriaProd: Categoria;
  medidaProd: UnidadMedida;
}

