export class NuevoUsuarioInterface{
  id: number;
  nombre: string;
  nombreUsuario: string;
  email: string;
  roles: string[];
  password: string;
  telefono: number;

  constructor(nombre: string, nombreUsuario: string, email: string, password: string, telefono: number) {
    this.nombre = nombre;
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.password = password;
    this.telefono = telefono;
    this.roles = ['user'];
  }
}
