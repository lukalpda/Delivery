import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido.interface';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/api/v1/pedidos/';




  myForm = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    order: new FormControl(''),
    completed: new FormControl(false)
  });
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream

>>>>>>> Stashed changes
  listarPedidos(){
=======
  listarPedidos() {
>>>>>>> Stashed changes
    return this.http.get<Pedido[]>(this.Url);
  }

  crearPedido(item: Pedido) {
    return this.http.post<Pedido>(this.Url, item);
  }

  buscarXIdPedido(id: number) {
    return this.http.get<Pedido>(this.Url + id);
  }

  modificarPedido(item: Pedido) {
    return this.http.put<Pedido>(this.Url + item.numPedido, item);
  }

  estadoPedido(pedido: Pedido) {
    if (pedido.estadoListo === true) {
      pedido.estadoListo = false;
    } else {
      pedido.estadoListo = true;
    }
  }
}
