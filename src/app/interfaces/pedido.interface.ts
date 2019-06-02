import { Time } from '@angular/common';

export interface Pedido{
    pedido_id:number;
    compobante_fecha:Date;
    comprobante_fecha_anulado:Date;
    comprobante_hora:Time;
    comprobante_nombre:string;
    pedido_total:number;
}