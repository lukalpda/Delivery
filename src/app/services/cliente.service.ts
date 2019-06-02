import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  Url= "http://localhost:8000/api/v1/apirest_cliente/";
=======
  Url= "http://localhost:8000/api/v1/clientes/";
>>>>>>> a9abda79a471484a3a1e2aa4d191f440825fa2de

  listarClientes(){
    return this.http.get<Cliente[]>(this.Url)
  }
  crearCliente(item: Cliente){
    return this.http.post<Cliente>(this.Url, item);
  }

  buscarXIdCliente(id: number){
    return this.http.get<Cliente>(this.Url+id);
  }

  modificarCliente(item:Cliente){
    return this.http.put<Cliente>(this.Url+item.id_usuario, item);
  }
}
