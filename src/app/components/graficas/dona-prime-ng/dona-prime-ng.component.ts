import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../interfaces/cliente.interface';
import {ClienteService} from '../../../services/cliente.service';
import {Pedido} from '../../../interfaces/pedido.interface';
import {PedidoService} from '../../../services/pedido.service';
import {Manufacturado} from '../../../interfaces/manufacturado.interface';


@Component({
  selector: 'app-dona-prime-ng',
  templateUrl: './dona-prime-ng.component.html',
  styleUrls: ['./dona-prime-ng.component.css']
})
export class DonaPrimeNGComponent implements OnInit {

  data: any;
  clienteDona: Cliente[]=[];
  pedidoDona: Pedido[]=[];
  manufacturado: Manufacturado;
  manufacturados: Manufacturado[]=[];



  constructor(
    private _clienteService: ClienteService,
    private _pedidoService: PedidoService
  ) {
    this.data = {
      labels: ['a','b','c'],
      datasets: [
        {
          data: ['50','32','14'],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  ngOnInit() {
    this._pedidoService.listarPedidos().subscribe(
      resp => {this.pedidoDona=resp;}
    )
  }



}
