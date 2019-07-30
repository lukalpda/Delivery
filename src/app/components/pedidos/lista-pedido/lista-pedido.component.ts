import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, Sort } from '@angular/material';
import {PedidoService} from '../../../services/pedido.service';
import {Pedido} from '../../../interfaces/pedido.interface';
import {NuevoUsuarioInterface} from '../../../interfaces/nuevo-usuario.interface';
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
  clientes: NuevoUsuarioInterface[] = [];
  detalleVenta: DetalleVenta;

  constructor(private _pedidoServices: PedidoService, private _detalleServices: DetalleVentaService) {
    //@ts-ignore
    this.pedido={};
    //@ts-ignore
    this.detallesPedido={};
  }

  displayedColumns: string[] = ['numPedido', 'nombreCliente', 'telefono', 'detallePedido', 'total', 'estado', 'con_envio', 'eliminar'/*, 'acciones'*/];

  dataSource= new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this._pedidoServices.listarPedidos().subscribe(
      res => {
        console.log(this.listarDetalle());
        this.dataSource.data = res;});
    //this._detalleServices.listarXPedido(1).subscribe( data => {this.dataSource = data;});
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
  
  //modificar para que busque por nombre del cliente
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Elimina espacios en blanco
    filterValue = filterValue.toLowerCase(); // Datasource por defecto en minusculas
    this.dataSource.filter = filterValue;
  }

  listarDetalle(){
    let id = localStorage.getItem("idDetalle");
    this._detalleServices.buscarXIdDetalleVenta(+id).subscribe( data => {this.detalleVenta = data;});
  }

  eliminarPedido(item: Pedido){
    this.pedido.fechaAnulado = new Date();
    //this.pedido[id - 1].fechaAnulado = moment().utc(true).toDate();
    this._pedidoServices.modificarPedido(this.pedido).subscribe(data => {
      this.pedido = data;
      this.pedido.numPedido = data.numPedido
    });
  }
}
