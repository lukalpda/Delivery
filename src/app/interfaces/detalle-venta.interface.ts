import { Manufacturado } from './manufacturado.interface';
import { Factura } from './factura.interface';
import { Pedido } from './pedido.interface';
import { Articulo } from './articulo.interface';

export interface DetalleVenta {
  idDetalle: number;
  cantidad: number;
  subtotal: number;
  fechaAnulado: Date; // no existis
  pedido: Pedido;
  item: Articulo;
  manufacturado: Manufacturado;
}

export interface Time {
  value: string;
  viewValue: string;
}
