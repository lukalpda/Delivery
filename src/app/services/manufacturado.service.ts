import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Manufacturado } from '../interfaces/manufacturado.interface';
import {Observable} from 'rxjs';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class ManufacturadoService {

  manufacturados: Manufacturado[];

  constructor(private http: HttpClient) { }
  
  Url= "http://localhost:8080/api/v1/manufacturados/";


  /*listarManufacturados(){
    return this.http.get<Manufacturado[]>(this.Url+'lista/',cabecera);
  }*/
  public listarManufacturados(): Observable<Manufacturado[]> {
    return this.http.get<Manufacturado[]>(this.Url + 'lista', cabecera);
  }

  listarManufacturadosDisponibles(buscarManuf: boolean){
      return this.http.get<Manufacturado[]>(this.Url+"disponibles/"+buscarManuf)
  }

  crearManufacturado(item: Manufacturado){
    return this.http.post<Manufacturado>(this.Url+"nuevo", item);
  }

  buscarXIdManufacturado(id: number){
    return this.http.get<Manufacturado>(this.Url+"detalle/"+id);
  }

  modificarManufacturado(item:Manufacturado){
    return this.http.put<Manufacturado>(this.Url+"actualizar/"+item.id_artManuf, item);
  }
}
