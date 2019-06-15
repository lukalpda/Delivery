import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {PedidoService} from '../../../services/pedido.service';
import {Pedido} from '../../../interfaces/pedido.interface';
import {Cliente} from '../../../interfaces/cliente.interface';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  pedidos: Pedido[] = [];
  clientes: Cliente[] = [];

  constructor(private _pedidoServices: PedidoService) { }

  displayedColumns: string[] = ['numPedido', 'nombreCliente', 'detallePedido', 'estado', 'total', 'eliminar'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this._pedidoServices.listarPedidos().subscribe(
      res => {
        this.dataSource.data = res;
      });
  }

  eliminarPedido(pedido: Pedido){
    // @ts-ignore
    pedido.fechaAnulado = Date.now();//pedido.fechaAnulado = Date.now();
    this._pedidoServices.modificarPedido(pedido);
  }

  estado(pedido: Pedido){
    pedido.estadoListo = true;
    this._pedidoServices.modificarPedido(pedido);
  }
}
