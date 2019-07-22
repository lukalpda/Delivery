import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/empleados/";
  

  listarEmpleados(){
    return this.http.get<Empleado[]>(this.Url+"lista");
  }

  crearEmpleado(item: Empleado){    
    return this.http.post<Empleado>(this.Url+"nuevo", item);
  }

  buscarXIdEmpleado(id: number){
    return this.http.get<Empleado>(this.Url+"detalle/"+id);
  }

  modificarEmpleado(item:Empleado){
    return this.http.put<Empleado>(this.Url+"actualizar/"+item.idEmpleado, item);
  }
}
