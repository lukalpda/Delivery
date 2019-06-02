import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8000/api/v1/categorias/";

  listarCategorias(){
    return this.http.get<Categoria[]>(this.Url)
  }
  crearCategoria(item: Categoria){
    return this.http.post<Categoria>(this.Url, item);
  }

  buscarXIdCategoria(id: number){
    return this.http.get<Categoria>(this.Url+id);
  }

  modificarCategoria(item:Categoria){
    return this.http.put<Categoria>(this.Url+item.categoria_id, item);
  }
}
