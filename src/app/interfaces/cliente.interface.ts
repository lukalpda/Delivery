import {Domicilio} from './domicilio.interface';

export interface Cliente {
  idUsuario: number;
  nombreUsuario: string;
  nombre: string;
  dni: number;
  password: string;
  telefono: number;
  email: string;
  baja: Date;
  alta: Date;
  direccion: Domicilio;

}
