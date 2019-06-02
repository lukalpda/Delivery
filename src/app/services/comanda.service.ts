import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comanda} from '../interfaces/comanda.interface';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  Url= "http://localhost:8000/api/v1/apirest_comanda/";
=======
  Url= "http://localhost:8000/api/v1/comandas/";
>>>>>>> a9abda79a471484a3a1e2aa4d191f440825fa2de

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
