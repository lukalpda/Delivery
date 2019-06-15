import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {PedidoService} from '../../../services/pedido.service';
import {Pedido} from '../../../interfaces/pedido.interface';
import {Cliente} from '../../../interfaces/cliente.interface';
import {DetalleVenta} from '../../../interfaces/detalle-venta.interface';
import {DetalleVentaService} from '../../../services/detalle-venta.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  pedidos: Pedido[] = [];
  detallesPedido: DetalleVenta[] = [];
  pedido: Pedido;
  clientes: Cliente[] = [];
  detalleVenta: DetalleVenta;

  constructor(private _pedidoServices: PedidoService, private _detalleServices: DetalleVentaService) {
    //@ts-ignore
    this.pedido={};
    //@ts-ignore
    this.detallesPedido={};
  }

  displayedColumns = ['numPedido', 'nombreCliente','telefono', 'detallePedido', 'estado', 'total', 'eliminar'];

  dataSource= new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this._pedidoServices.listarPedidos().subscribe(
      res => {
        console.log(this.listarDetalle());
        this.dataSource.data = res;});
    //this._detalleServices.listarXPedido(1).subscribe( data => {this.dataSource = data;});
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  listarDetalle(){
    let id = localStorage.getItem("idDetalle");
    this._detalleServices.buscarXIdDetalleVenta(+id).subscribe( data => {this.detalleVenta = data;});
  }

  eliminarPedido(pedido: Pedido){
    // @ts-ignore
    pedido.fechaAnulado = Date.now();//pedido.fechaAnulado = Date.now();
    this._pedidoServices.modificarPedido(pedido);
  }

  estado(pedido: Pedido){
    pedido.estadoListo = true;
    this._pedidoServices.estadoPedido(pedido);
  }

}