import { Cargos } from './cargos.interface';

export interface Empleado{
  id_empleado: number;
  codigo_ingreso: number;
  cuil: number;
  cargo: Cargos;
  nombre_persona: string;
  dni: number;
  password: string;
  telefono: number;
  email: string;
  baja: Date;
  alta: Date;
  direccion: any;




}
