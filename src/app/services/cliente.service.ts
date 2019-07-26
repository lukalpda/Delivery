import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cliente} from '../interfaces/cliente.interface';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8080/api/v1/clientes/";

  listarClientes(){
    return this.http.get<Cliente[]>(this.Url+'lista',cabecera)
  }
  crearCliente(item: Cliente){
    return this.http.post<Cliente>(this.Url, item);
  }

  buscarXIdCliente(id: number){
    return this.http.get<Cliente>(this.Url+id);
  }

  modificarCliente(item:Cliente){
    return this.http.put<Cliente>(this.Url+item.idUsuario, item);
  }
}
