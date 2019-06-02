import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DetalleReceta} from '../interfaces/detalle-receta.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleRecetaService {

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8000/api/v1/apirest_detalle_receta/";

  listarDetalleRecetas(){
    return this.http.get<DetalleReceta[]>(this.Url)
  }
  crearDetalleReceta(item: DetalleReceta){
    return this.http.post<DetalleReceta>(this.Url, item);
  }

  buscarXIdDetalleReceta(id: number){
    return this.http.get<DetalleReceta>(this.Url+id);
  }

  modificarDetalleReceta(item:DetalleReceta){
    return this.http.put<DetalleReceta>(this.Url+item.receta_id, item);
  }
}
