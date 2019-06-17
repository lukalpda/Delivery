import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManufacturadoService } from 'src/app/services/manufacturado.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  ngOnInit() {
  }

} 
