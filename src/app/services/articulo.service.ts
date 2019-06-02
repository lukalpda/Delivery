import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Articulo} from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  Url: "http://localhost:8000/api/v1/apirest_articulos/";

  listarArticulos(){
    return this.http.get<Articulo[]>(this.Url)
  }
  crearArticulo(item: Articulo){
    return this.http.post<Articulo>(this.Url, item);
  }

  buscarXIdArticulo(id: number){
    return this.http.get<Articulo>(this.Url+id);
  }

  modificarArticulo(item:Articulo){
    return this.http.put<Articulo>(this.Url+item.articulo_id, item);
  }
}
