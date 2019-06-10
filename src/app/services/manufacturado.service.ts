import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manufacturado } from '../interfaces/manufacturado.interface';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ManufacturadoService {

  constructor(private http: HttpClient) { }
  
  Url= "http://localhost:8080/api/v1/manufacturados/";

  myForm = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    order: new FormControl(''),
    completed: new FormControl(false)
  });
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
    return this.http.put<Manufacturado>(this.Url+item.id_artManuf, item);
  }
}
