import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  appName: string = 'Sistema de Pedidos';

  constructor(private orderService: OrdersService) { }

  products = [
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
    this.orderService.myForm.value.order = this.tempOrder;
    let data = this.orderService.myForm.value;
    data.totalOrder = this.totalOrder;
    //call service
    this.orderService.createOrder(data);
    this.tempOrder = [];
    this.totalOrder = 0;
    this.orderService.myForm.reset();
    console.log(data);
  }

}
