import { Time } from '@angular/common';

export interface Comanda{
    id_comanda:number;
    fecha:Date;
    hora:Date;
    nombre_comprobante:string;
    fechaAnulado:Date;
}
