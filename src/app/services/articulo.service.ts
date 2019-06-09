import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Articulo} from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  articulos : Articulo[];

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8080/api/v1/articulos/";

  listarArticulos(){
    return this.http.get<Articulo[]>(this.Url)
  }

  listarArticulosDisponiblesEnLista(){
    this.listarArticulos().subscribe(data=>
      this.articulos = data.filter(p=>p.esPrima == true));
  }

  crearArticulo(item: Articulo){
    return this.http.post<Articulo>(this.Url, item);
  }

  buscarXIdArticulo(id: number){
    return this.http.get<Articulo>(this.Url+id);
  }

  modificarArticulo(item:Articulo){
     return this.http.put<Articulo>(this.Url+item.id_articulo, item);
  }
}
