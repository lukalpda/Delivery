import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido.interface';
import {DetalleVenta} from '../interfaces/detalle-venta.interface';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/pedidos/";


  myForm = new FormGroup({
    nombreCliente: new FormControl(''),
    nroPedido: new FormControl(''),
    telefono: new FormControl(''),
    observaciones: new FormControl('Sin observaciones'),
    estado: new FormControl(false)
  });

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
  estadoPedido(pedido:Pedido){
    if(pedido.estadoListo==true) {
      pedido.estadoListo = false;
    }else{
      pedido.estadoListo = true;
    }
  }


}
