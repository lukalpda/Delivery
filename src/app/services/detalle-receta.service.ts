import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DetalleReceta} from '../interfaces/detalle-receta.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleRecetaService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  Url= "http://localhost:8000/api/v1/recetas/";
  
=======
  Url= "http://localhost:8080/api/v1/recetas/";

>>>>>>> 011e103f899b7f37a7b4b3b773d50ca1514883e4
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
