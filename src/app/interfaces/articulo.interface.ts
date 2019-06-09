export interface Articulo{
  id_articulo: number;
  costo: number;
  detalle: string;
  enLista: boolean;
  esParaVenta: boolean;
  foto: string;
  nombre_articulo: string;
  stock: number;
  stockMinimo: number;
  categoriaProd: number;
  medidaProd: number;
  //precioArticulo: number;
}

