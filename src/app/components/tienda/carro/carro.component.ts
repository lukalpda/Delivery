import { Component, OnInit } from "@angular/core";
import { Manufacturado } from "src/app/interfaces/manufacturado.interface";
import { CarroService } from "src/app/services/carro.service";
import { DetalleVenta } from "src/app/interfaces/detalle-venta.interface";
import { Articulo } from "src/app/interfaces/articulo.interface";
import { DetalleVentaService } from "src/app/services/detalle-venta.service";

@Component({
  selector: "app-carro",
  templateUrl: "./carro.component.html",
  styleUrls: ["./carro.component.css"]
})
export class CarroComponent implements OnInit {
  carroM: Manufacturado[] = [];
  carroA: Articulo[] = [];
  carroT: DetalleVenta[] = [];
  total:number=0;
  constructor(
    private _carroService: CarroService,
    private _DetalleService: DetalleVentaService
  ) {
    // //@ts-ignore
    // this.carroT = {};
    //@ts-ignore
    this.carroM = {};
    //@ts-ignore
    this.carroA = {};
  }

  ngOnInit() {
    this.carroM = this._carroService.carroM;
    //console.log(this.carroM);
    this.carroA = this._carroService.carroA;
    //console.log(this.carroA);

    this.unificarCarrosParte1();
    this.unificarCarrosParte2();
    this.calcularSubtotal();
//    localStorage.setItem("carroT", JSON.stringify(this.carroT));
  }

  calcularSubtotal() {
    for (let i=0; i<this.carroT.length; i++){
      if(this.carroT[i].item == null){
        this.carroT[i].subtotal = this.carroT[i].cantidad*this.carroT[i].manufacturado.precioM;
      }
      if(this.carroT[i].manufacturado == null){
        this.carroT[i].subtotal = this.carroT[i].cantidad*this.carroT[i].item.precioA;
      }
      this.total += this.carroT[i].subtotal;
    }
  }


  unificarCarrosParte1() {
    if (this.carroM != null) {
      //if (this.carroM.length > 0) {
      for (let i = 0; i < this.carroM.length; i++) {
        //@ts-ignore
        let objeto: DetalleVenta = {};

        objeto.manufacturado = this.carroM[i];
        objeto.item = null;
        let contador = 0;
        if (this.carroT.length > 0) {
          for (let j = 0; j < this.carroT.length; j++) {
            if (this.carroT[j].item == null) {
              if (
                this.carroT[j].manufacturado.nombre_articuloM ==
                objeto.manufacturado.nombre_articuloM
              ) {
                this.carroT[j].cantidad += 1;
                contador++;
              }
            }
          }
        } else {
          contador++;
          this.carroT.push(objeto);
          this.carroT[i].cantidad = 1;
        }
        if(contador < 1){
          objeto.cantidad = 1;
          this.carroT.push(objeto);
          
        }
       
      }
     
    }
  }

  unificarCarrosParte2() {
    if (this.carroA != null) {
      //if (this.carroM.length > 0) {
      for (let i = 0; i < this.carroA.length; i++) {
        //@ts-ignore
        let objeto: DetalleVenta = {};

        objeto.item = this.carroA[i];
        objeto.manufacturado = null;
        let contador = 0;
        if (this.carroT.length > 0) {
          for (let j = 0; j < this.carroT.length; j++) {
            if (this.carroT[j].manufacturado == null) {
              if (
                this.carroT[j].item.nombre_articulo ==
                objeto.item.nombre_articulo
              ) {
                this.carroT[j].cantidad += 1;
                contador++;
              }
            }
          }
        } else {
          contador++;
          this.carroT.push(objeto);
          this.carroT[i].cantidad = 1;
        }
        if(contador < 1){
          objeto.cantidad = 1;
          this.carroT.push(objeto);
          
        }
        
      }
      //   }
    }
  }

  sumarEnvio(){
    this.total += 50;
  }
  restarEnvio(){
    this.total -=50;
  }
  finalizarCompra() {}
}
