import { Time } from '@angular/common';
import { Cliente } from './cliente.interface';
import {Pedido} from './pedido.interface';

export interface Factura{
  numFactura:number;
  esEfectivo:boolean;
  total:number;
  cliente: Cliente;
  pedidoConfirmado: Pedido;
  fecha: Date;
  hora: Time;
  nombre_comprobante: string;
  fechaAnulado: Date;

}
