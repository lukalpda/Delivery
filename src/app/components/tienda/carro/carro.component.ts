import { Component, OnInit } from "@angular/core";
import { Manufacturado } from "src/app/interfaces/manufacturado.interface";
import { CarroService } from "src/app/services/carro.service";
import { DetalleVenta } from "src/app/interfaces/detalle-venta.interface";
import { Articulo } from "src/app/interfaces/articulo.interface";
import { DetalleVentaService } from "src/app/services/detalle-venta.service";
import { Router } from "@angular/router";
import { PedidoService } from "src/app/services/pedido.service";
import { Pedido } from "src/app/interfaces/pedido.interface";
import {Cliente} from '../../../interfaces/cliente.interface';

@Component({
  selector: "app-carro",
  templateUrl: "./carro.component.html",
  styleUrls: ["./carro.component.css"]
})
export class CarroComponent implements OnInit {
  carroM: Manufacturado[] = [];
  carroA: Articulo[] = [];
  carroT: DetalleVenta[] = [];
  total: number = 0;
  pedido: Pedido;
  cliente: Cliente;
  pedidos: Pedido[] = [];
  nombreTemporal: string;
  observaciones: string;
  constructor(
    private router: Router,
    private _carroService: CarroService,
    private _DetalleService: DetalleVentaService,
    private _pedidoService: PedidoService
  ) {
    //@ts-ignore
    this.pedido = {};
    //@ts-ignore
    this.carroM = {};
    //@ts-ignore
    this.carroA = {};
  }

  ngOnInit() {
    this.carroM = this._carroService.carroM;
    this.carroA = this._carroService.carroA;

    if (localStorage.getItem("carroT") != null) {
      this.recuperarCarro();
    }

    this.unificarCarrosParte1();
    this.unificarCarrosParte2();
    this.calcularSubtotal();
    this.mantenerCarro();
    this._carroService.vaciarCarroM();
  }

  mantenerCarro() {
    for (let item of this.carroT) {
      localStorage.setItem("carroT", JSON.stringify(this.carroT));
    }
  }
  recuperarCarro() {
    this.carroT = JSON.parse(localStorage.getItem("carroT"));
  }

  calcularSubtotal() {
    this.total = 0;
    for (let i = 0; i < this.carroT.length; i++) {
      if (this.carroT[i].item == null) {
        this.carroT[i].subtotal =
          this.carroT[i].cantidad * this.carroT[i].manufacturado.precioM;
      }
      if (this.carroT[i].manufacturado == null) {
        this.carroT[i].subtotal =
          this.carroT[i].cantidad * this.carroT[i].item.precioA;
      }
      this.total += this.carroT[i].subtotal;
    }
  }

  unificarCarrosParte1() {
    if (this.carroM != null) {
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
                this.carroT[j].manufacturado.nombreManufacturado ==
                objeto.manufacturado.nombreManufacturado
              ) {
                this.carroT[j].cantidad += 1;
                contador++;
              }
            }
          }
          if (contador < 1) {
            objeto.cantidad = 1;
            this.carroT.push(objeto);
          }
        } else {
          contador++;
          this.carroT.push(objeto);
          this.carroT[i].cantidad = 1;
        }
      }
    }
    this.carroM = null;
  }

  unificarCarrosParte2() {
    if (this.carroA != null) {
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
                this.carroT[j].item.nombreArticulo ==
                objeto.item.nombreArticulo
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
        if (contador < 1) {
          objeto.cantidad = 1;
          this.carroT.push(objeto);
        }
      }
    }
  }

  sumarEnvio() {
    this.total += 50;
  }
  restarEnvio() {
    this.total -= 50;
  }
  finalizarCompra() {
    this.pedido.observaciones = this.observaciones;
    this.pedido.nombreTemporal = this.nombreTemporal;
    this.pedido.total = this.total;
    this.pedido.cliente = this.cliente;
    this._pedidoService.crearPedido(this.pedido).subscribe(pedirijillo => {
      this.pedido = pedirijillo;
      console.log("Pedido Creado");
      for (let item of this.carroT) {
        item.pedido = this.pedido;
        this._DetalleService.crearDetalleVenta(item).subscribe(() => {
          console.log("Se guardo");
        });
      }
    });

    localStorage.clear();
    this.router.navigate(["tienda"]);
  }
}
