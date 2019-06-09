import { Time } from '@angular/common';

export interface Factura{
    fecha: Date;
    hora: Date;
    nombre_comprobante: string;
    fechaAnulado: Date;
    numFactura:number;
    esEfectivo:boolean;
    total:number;
    cliente: any;
}
