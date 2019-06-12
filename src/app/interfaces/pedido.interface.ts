import {Time} from '@angular/common';


export interface Pedido{
  numPedido: number;
  total: number;
  fecha: Date;
  hora: Time;
  nombre_comprobante: string;
  fechaAnulado: Date;
}
