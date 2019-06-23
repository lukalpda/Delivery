import { Component, OnInit } from "@angular/core";
import { Manufacturado } from "src/app/interfaces/manufacturado.interface";
import { CarroService } from "src/app/services/carro.service";
import { DetalleVenta } from 'src/app/interfaces/detalle-venta.interface';
import { Articulo } from 'src/app/interfaces/articulo.interface';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: "app-carro",
  templateUrl: "./carro.component.html",
  styleUrls: ["./carro.component.css"]
})
export class CarroComponent implements OnInit {
  carroM: Manufacturado[];
  carroA: Articulo[];
  carroT: DetalleVenta[];
  constructor(
    private _carroService: CarroService
  ) {} 

  ngOnInit() {
    this.carroM = this._carroService.carroM;
    console.log(this.carroM);
    this.carroA = this._carroService.carroA;
    console.log(this.carroA);
  }  

  calcularSubtotal(cantidad: number, precio: number){
    return cantidad*precio;
  }
  unificarCarros(){

  }

  finalizarCompra(){

  }
}
