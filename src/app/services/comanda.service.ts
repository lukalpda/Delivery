import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comanda} from '../interfaces/comanda.interface';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8000/api/v1/apirest_comanda/";

  listarComandas(){
    return this.http.get<Comanda[]>(this.Url)
  }
  crearComanda(item: Comanda){
    return this.http.post<Comanda>(this.Url, item);
  }

  buscarXIdComanda(id: number){
    return this.http.get<Comanda>(this.Url+id);
  }

  modificarComanda(item:Comanda){
    return this.http.put<Comanda>(this.Url+item.comanda_id, item);
  }
}
