import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort, MatTableDataSource, MatSort } from '@angular/material';
import {OrdersService} from '../../../services/orders.service';

export interface Order {
  orderNumber: number;
  customerName: string;
  order: string;
  completed: boolean;
  total: number;
}
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  
  constructor(private orderServices: OrdersService) { }

  displayedColumns: string[] = ['orderNumber', 'customerName', 'order', 'completed', 'total', 'actions'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this.getAllOrders();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  getAllOrders(){
    this.orderServices.getOrders().subscribe(
      res => {
         this.dataSource.data = res;   
        });
  }
  onDelete(id: string){
    this.orderServices.deleteOrder(id);
  }
  onChangeStatus(order: any){
    order.completed = true;
    this.orderServices.updateOrder(order);
  }
}
