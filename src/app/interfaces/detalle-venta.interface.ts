import { Manufacturado } from "./manufacturado.interface";
import { Factura } from "./factura.interface";
import { Pedido } from './pedido.interface';
import { Comanda } from './comanda.interface';
import { Articulo } from './articulo.interface';

export interface DetalleVenta {
  idDetalle: number;
  cantidad: number;
  subtotal: number;
  fechaAnulado: Date;
  factura: Factura;
  pedido: Pedido;
  comanda: Comanda;
  item: Articulo;
  manufacturado: Manufacturado;
}
