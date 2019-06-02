import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cargos} from '../interfaces/cargos.interface';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8000/api/v1/apirest_cargos/";

  listarCargos(){
    return this.http.get<Cargos[]>(this.Url)
  }
  crearCargo(item: Cargos){
    return this.http.post<Cargos>(this.Url, item);
  }

  buscarXIdCargo(id: number){
    return this.http.get<Cargos>(this.Url+id);
  }

  modificarCargo(item:Cargos){
    return this.http.put<Cargos>(this.Url+item.cargo_id, item);
  }
}
