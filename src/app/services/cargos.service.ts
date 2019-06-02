import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cargos} from '../interfaces/cargos.interface';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  Url= "http://localhost:8000/api/v1/apirest_cargos/";
=======
  Url= "http://localhost:8000/api/v1/cargos/";
>>>>>>> a9abda79a471484a3a1e2aa4d191f440825fa2de

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
