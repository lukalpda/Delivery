import { Component, OnInit } from '@angular/core';
import {ManufacturadoService} from '../../services/manufacturado.service';
import {Manufacturado} from '../../interfaces/manufacturado.interface';
import {PedidoService} from '../../services/pedido.service';
import {Router} from '@angular/router';
import {Pedido} from '../../interfaces/pedido.interface';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  appName: string = 'Sistema de Pedidos';

  manufacturados: Manufacturado[] = [];
  pedidos: Pedido[] = [];
  pedido: Pedido;

  constructor(
    private _manufacturadoService: ManufacturadoService,
    private _pedidoService: PedidoService,
    private router: Router) {  }

  totalPedido = 0;
  pedidoTemp = [];

  ngOnInit() {
    this._manufacturadoService
      .listarManufacturados()
      .subscribe(data => {
        this.manufacturados = data;
      });
    console.log(this.manufacturados);
    this._pedidoService
      .listarPedidos()
      .subscribe(data => {
        this.pedidos = data;
      });
    console.log(this.manufacturados);
  }

  onAddProduct(manufacturados){
    console.log(manufacturados);
    this.totalPedido = (this.totalPedido + manufacturados.precioM);
    this.pedidoTemp.push(manufacturados.nombre_articuloM);
  }

  onSubmit(){
    this._pedidoService.myForm.value.order = this.pedidoTemp;
    let data = this._pedidoService.myForm.value;
    data.totalPedido = this.totalPedido;
    //call service
    this._pedidoService.crearPedido(data);
    this.pedidoTemp = [];
    this.totalPedido = 0;
    this._pedidoService.myForm.reset();
    console.log(data);
  }
  removeItemTempOrder = (pedido) =>{
    let index = this.pedidoTemp.indexOf(pedido);
    if(index >-1) this.pedidoTemp.splice(index, 1);
  }

  /*  products = [
      {
        name: "Pescado",
        price: 4
      }
    ]
    totalOrder = 0;
    tempOrder = [];

    onAddProduct(product){
      console.log(product);
      this.totalOrder = (this.totalOrder + product.price);
      this.tempOrder.push(product.name);
    }
    removeItemTempOrder = (order) =>{
      let index = this.tempOrder.indexOf(order);
      if(index >-1) this.tempOrder.splice(index, 1);
    }
    onSubmit(){
      this.orderService.myForm.value.order = this.tempOrder;
      let data = this.orderService.myForm.value;
      data.totalOrder = this.totalOrder;
      //call service
      this.orderService.createOrder(data);
      this.tempOrder = [];
      this.totalOrder = 0;
      this.orderService.myForm.reset();
      console.log(data);
    }*/

}
