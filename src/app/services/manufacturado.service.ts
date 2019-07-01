import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manufacturado } from '../interfaces/manufacturado.interface';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ManufacturadoService {

  manufacturados: Manufacturado[];

  constructor(private http: HttpClient) { }
  
  Url= "http://localhost:8080/api/v1/manufacturados/";


  listarManufacturados(){
    return this.http.get<Manufacturado[]>(this.Url+"lista")
  }
  listarManufacturadosDisponibles(buscarManuf: boolean){
      return this.http.get<Manufacturado[]>(this.Url+"disponibles/"+buscarManuf)
  }

  crearManufacturado(item: Manufacturado){
    return this.http.post<Manufacturado>(this.Url, item);
  }

  buscarXIdManufacturado(id: number){
    return this.http.get<Manufacturado>(this.Url+id);
  }

  modificarManufacturado(item:Manufacturado){
    return this.http.put<Manufacturado>(this.Url+item.id_artManuf, item);
  }
}
