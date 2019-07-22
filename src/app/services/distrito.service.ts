import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Distrito } from '../interfaces/distrito.interface';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/Distritos/";
  

  listarDistritos(){
    return this.http.get<Distrito[]>(this.Url+"lista");
  }

  crearDistrito(item: Distrito){    
    return this.http.post<Distrito>(this.Url+"nuevo", item);
  }

  buscarXIdDistrito(id: number){
    return this.http.get<Distrito>(this.Url+"detalle/"+id);
  }

  modificarDistrito(item:Distrito){
    return this.http.put<Distrito>(this.Url+"actualizar/"+item.distrito_id, item);
  }
}
