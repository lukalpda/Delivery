export interface Articulo{
  articulo_id: number;
  articulo_costo: number;
  articulo_detalle: string;
  en_lista: boolean;
  articulo_vendible: boolean;
  articulo_foto: string;
  articulo_nombre: string;
  articulo_stock: number;
  articulo_stock_minimo: number;
  id_categoria: number;
  id_medida: number;
}

