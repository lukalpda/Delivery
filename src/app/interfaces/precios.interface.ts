import { Articulo } from './articulo.interface';
import { Manufacturado } from './manufacturado.interface';

export interface Precio{
    id_precio:number;
    fechaInicio:Date;
    fechaFin:Date;
    precio:number;
    precioItem:Articulo;
    precioPlato:Manufacturado;
}
