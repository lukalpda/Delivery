import {Domicilio} from './domicilio.interface';

export interface Cliente {
  id_usuario: number;
  nombre_usuario: string;
  nombre_persona: string;
  dni: number;
  password: string;
  telefono: number;
  email: string;
  baja: Date;
  alta: Date;
  direccion: Domicilio;

}
