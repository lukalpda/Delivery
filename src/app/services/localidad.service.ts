import { Injectable } from '@angular/core';
import { Localidad } from '../interfaces/localidad.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalidadadService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/localidades/";
  

  listarLocalidades(){
    return this.http.get<Localidad[]>(this.Url+"lista");
  }

  crearLocalidad(item: Localidad){    
    return this.http.post<Localidad>(this.Url+"nuevo", item);
  }

  buscarXIdLocalidad(id: number){
    return this.http.get<Localidad>(this.Url+"detalle/"+id);
  }

  modificarLocalidad(item:Localidad){
    return this.http.put<Localidad>(this.Url+"actualizar/"+item.id_Localidad, item);
  }
}
