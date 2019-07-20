import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Articulo} from '../interfaces/articulo.interface';
import {Observable} from 'rxjs';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  articulos : Articulo[];

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8080/api/v1/articulos/";

  /*listarArticulos(){
    return this.http.get<Articulo[]>(this.Url+'lista');
  }*/

  public listarArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.Url + 'lista', cabecera);
  }

  listarArticulosDisponiblesPrima(buscarArtPrima:boolean){
    return this.http.get<Articulo[]>(this.Url+"primas/"+buscarArtPrima)
  }
  listarArticulosDisponiblesVenta(buscarArtVenta:boolean){
    return this.http.get<Articulo[]>(this.Url+"vendibles/"+buscarArtVenta)
  }

  crearArticulo(item: Articulo){
    return this.http.post<Articulo>(this.Url+'nuevo', item);
  }

  buscarXIdArticulo(id: number){
    return this.http.get<Articulo>(this.Url+"detalle/"+id);
  }

  modificarArticulo(item:Articulo){
     return this.http.put<Articulo>(this.Url+"actualizar/"+item.id_articulo, item);
  }
}
