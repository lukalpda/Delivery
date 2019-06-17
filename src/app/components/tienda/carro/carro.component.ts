import { Component, OnInit } from "@angular/core";
import { Manufacturado } from "src/app/interfaces/manufacturado.interface";
import { CarroService } from "src/app/services/carro.service";
import { DetalleVenta } from 'src/app/interfaces/detalle-venta.interface';

@Component({
  selector: "app-carro",
  templateUrl: "./carro.component.html",
  styleUrls: ["./carro.component.css"]
})
export class CarroComponent implements OnInit {
  carro: Manufacturado[];
  constructor(
    private _carroService: CarroService
  ) {} 

  ngOnInit() {
    this.carro = this._carroService.carro;
    console.log(this.carro);
  }  

  calcularSubtotal(cantidad: number, precio: number){
    return cantidad*precio;
  }
}
