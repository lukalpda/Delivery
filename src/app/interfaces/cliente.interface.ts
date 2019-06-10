import {Domicilio} from './domicilio.interface';

export interface Cliente {
  nombre_persona: string;
  dni: number;
  password: string;
  telefono: number;
  email: string;
  baja: Date;
  alta: Date;
  direccion: Domicilio;
  id_usuario: number;
  nombre_usuario: string;
}
