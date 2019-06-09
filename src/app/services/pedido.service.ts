import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/pedidos/";
  

  listarPedidos(){
    return this.http.get<Pedido[]>(this.Url);
  }

  crearPedido(item: Pedido){    
    return this.http.post<Pedido>(this.Url, item);
  }

  buscarXIdPedido(id: number){
    return this.http.get<Pedido>(this.Url+id);
  }

  modificarPedido(item:Pedido){
    return this.http.put<Pedido>(this.Url+item.numPedido, item);
  }
}
