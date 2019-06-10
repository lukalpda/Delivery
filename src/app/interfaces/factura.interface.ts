import { Time } from '@angular/common';
import { Cliente } from './cliente.interface';

export interface Factura{
    fecha: Date;
    hora: Date;
    nombre_comprobante: string;
    fechaAnulado: Date;
    numFactura:number;
    esEfectivo:boolean;
    total:number;
    cliente: Cliente;
}
