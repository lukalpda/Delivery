import { Time } from '@angular/common';

export interface Factura{
    factura_id:number;
    comprobante_fecha:Date;
    comprobante_fecha_anulado:Date;
    comprobante_hora: Time;
    comprobante_nombre: string;
    factura_es_efectivo:boolean;
    factura_total:number;
    id_usuario:number;
}