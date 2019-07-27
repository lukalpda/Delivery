import {NuevoUsuarioInterface} from './nuevo-usuario.interface';

export interface Pedido {
  numPedido: number;
  total: number;
  observaciones: string;
  nombreTemporal: string;
  estadoListo: boolean;
  cliente: NuevoUsuarioInterface;
  fecha: Date;
  fechaAnulado: Date;
  informe: string;
  demora: number;
  con_envio: boolean;
}
