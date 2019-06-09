import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8080/api/v1/clientes/";

  listarClientes(){
    return this.http.get<Cliente[]>(this.Url)
  }
  crearCliente(item: Cliente){
    console.log(item);
    console.log(item.direccion);
    return this.http.post<Cliente>(this.Url, item);
  }

  buscarXIdCliente(id: number){
    return this.http.get<Cliente>(this.Url+id);
  }

  modificarCliente(item:Cliente){
    return this.http.put<Cliente>(this.Url+item.id_usuario, item);
  }
}
