import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cliente} from '../interfaces/cliente.interface';
import { NuevoUsuarioInterface } from '../interfaces/nuevo-usuario.interface';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  Url= "http://localhost:8080/api/v1/clientes/";

  listarClientes(){
    return this.http.get<NuevoUsuarioInterface[]>(this.Url+'lista',cabecera)
  }
  crearCliente(item: NuevoUsuarioInterface){
    return this.http.post<NuevoUsuarioInterface>(this.Url+'nuevo', item);
  }

  buscarXIdCliente(id: number){
    return this.http.get<NuevoUsuarioInterface>(this.Url+'detalle/'+id);
  }

  modificarCliente(item:NuevoUsuarioInterface){
    return this.http.put<NuevoUsuarioInterface>(this.Url+item.id+'actualizar/', item);
  }
}
