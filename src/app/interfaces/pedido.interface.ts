import { Time } from '@angular/common';

export interface Pedido{
  fecha: Date;
  hora: Date;
  nombre_comprobante: string;
  fechaAnulado: Date;
  numPedido: number;
  total: number;
}
