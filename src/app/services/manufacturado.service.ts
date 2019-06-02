import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manufacturado } from '../interfaces/manufacturado.interface';

@Injectable({
  providedIn: 'root'
})
export class ManufacturadoService {

  constructor(private http: HttpClient) { }

  Url: "http://localhost:8000/api/v1/apirest_art_manufacturado/";

  listarManufacturados(){
    return this.http.get<Manufacturado[]>(this.Url)
  }
  crearManufacturado(item: Manufacturado){
    return this.http.post<Manufacturado>(this.Url, item);
  }

  buscarXIdManufacturado(id: number){
    return this.http.get<Manufacturado>(this.Url+id);
  }

  modificarManufacturado(item:Manufacturado){
    return this.http.put<Manufacturado>(this.Url+item.articulo_manuf_id, item);
  }

}