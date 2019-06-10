import { Manufacturado } from './manufacturado.interface';
import { Articulo } from './articulo.interface';

export interface DetalleReceta{
    id_receta:number;
    cantidad:number;
    fechaAnulado:Date;
    articulo:Articulo;
    articuloManuf:Manufacturado;
}
