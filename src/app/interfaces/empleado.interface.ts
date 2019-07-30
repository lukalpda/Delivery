import { Cargos } from './cargos.interface';

export interface Empleado{
  idEmpleado: number;
  codigoIngreso: number;
  cuil: number;
  cargo: Cargos;
  nombre: string;
  dni: number;
  password: string;
  telefono: number;
  email: string;
  baja: Date;
  alta: Date;
  direccion: any;




}
