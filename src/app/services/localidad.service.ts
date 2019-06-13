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
    return this.http.get<Localidad[]>(this.Url);
  }

  crearLocalidad(item: Localidad){    
    return this.http.post<Localidad>(this.Url, item);
  }

  buscarXIdLocalidad(id: number){
    return this.http.get<Localidad>(this.Url+id);
  }

  modificarLocalidad(item:Localidad){
    return this.http.put<Localidad>(this.Url+item.id_Localidad, item);
  }
}
