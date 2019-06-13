import { Time } from '@angular/common';
import { Cliente } from './cliente.interface';
import {Pedido} from './pedido.interface';

export interface Factura{
  numFactura:number;
  esEfectivo:boolean;
  total:number;
  pedidoConfirmado: Pedido;
  fecha: Date;
  hora: Time;
  fechaAnulado: Date;

}
