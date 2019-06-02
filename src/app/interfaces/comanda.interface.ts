import { Time } from '@angular/common';

export interface Comanda {
    comanda_id: number;
    comprobante_fecha: Date;
    comprobante_fecha_anulado: Date;
    comprobante_hora: Time;
    comprobante_nombre: string;
}
