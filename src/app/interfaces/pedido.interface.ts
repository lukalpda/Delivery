import {Time} from '@angular/common';
import {Cliente} from './cliente.interface';

export interface Pedido{
  numPedido: number;
  total: number;
  observaciones: string;
  nombreTemporal: string;
  estadoListo: boolean;
  cliente: Cliente;
  fecha: Date;
  fechaAnulado: Date;
  informe: string;
}
