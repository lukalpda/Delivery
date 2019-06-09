import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {Manufacturado} from '../../interfaces/manufacturado.interface';
import {ManufacturadoService} from '../../services/manufacturado.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  appName: string = 'Sistema de Pedidos';

  manufacturados: Manufacturado[] = [];

  constructor(
    private _orderService: OrdersService,
    private _manufacturadoService: ManufacturadoService,
    private router: Router
  ) { }

  articulosManufacturados = [
    {
      name: "Pollo",
      price: 4
    },
    {
      name: "Papas",
      price: 3
    },
    {
      name: "Pescado",
      price: 4
    }
  ]
  totalOrder = 0;
  tempOrder = [];

  ngOnInit() {
  }

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
    this._orderService.myForm.value.order = this.tempOrder;
    let data = this._orderService.myForm.value;
    data.totalOrder = this.totalOrder;
    //call service
    this._orderService.createOrder(data);
    this.tempOrder = [];
    this.totalOrder = 0;
    this._orderService.myForm.reset();
    console.log(data);
  }

}
