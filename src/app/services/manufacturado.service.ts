import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manufacturado } from '../interfaces/manufacturado.interface';

@Injectable({
  providedIn: 'root'
})

export class ManufacturadoService {

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
  
=======

>>>>>>> 011e103f899b7f37a7b4b3b773d50ca1514883e4
  Url= "http://localhost:8080/api/v1/manufacturados/";

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
