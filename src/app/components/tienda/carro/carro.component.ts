import { Component, OnInit } from "@angular/core";
import { Manufacturado } from "src/app/interfaces/manufacturado.interface";
import { CarroService } from "src/app/services/carro.service";
import { DetalleVenta } from "src/app/interfaces/detalle-venta.interface";
import { Articulo } from "src/app/interfaces/articulo.interface";
import { DetalleVentaService } from "src/app/services/detalle-venta.service";
import { Router } from "@angular/router";
import { PedidoService } from "src/app/services/pedido.service";
import { Pedido } from "src/app/interfaces/pedido.interface";
import { TokenService } from "src/app/services/complementos/token.service";
import { NuevoUsuarioInterface } from "../../../interfaces/nuevo-usuario.interface";
import { ClienteService } from "src/app/services/cliente.service";
import { DetalleRecetaService } from "src/app/services/detalle-receta.service";
import { DetalleReceta } from "src/app/interfaces/detalle-receta.interface";
import { ArticuloService } from "src/app/services/articulo.service";
import { element } from "@angular/core/src/render3";
import { debug } from "util";
import { LoginUsuarioInterface } from "src/app/interfaces/login-usuario.interface";
import { AuthService } from "src/app/services/complementos/auth.service";

@Component({
  selector: "app-carro",
  templateUrl: "./carro.component.html",
  styleUrls: ["./carro.component.css"]
})
export class CarroComponent implements OnInit {
  recetas: DetalleReceta[] = [];
  carroM: Manufacturado[] = [];
  carroA: Articulo[] = [];
  carroT: DetalleVenta[] = [];
  total: number = 0;
  pedido: Pedido;
  cliente: NuevoUsuarioInterface;
  pedidos: Pedido[] = [];
  nombreTemporal: string;
  info: any;
  observaciones: string;

  constructor(
    private router: Router,
    private _carroService: CarroService,
    private _DetalleService: DetalleVentaService,
    private _pedidoService: PedidoService,
    private _tokenService: TokenService,
    private _clienteService: ClienteService,
    private _recetaService: DetalleRecetaService,
    private _articuloService: ArticuloService,
    private _authService: AuthService
  ) {
    //@ts-ignore
    this.pedido = {};
    //@ts-ignore
    this.carroM = {};
    //@ts-ignore
    this.carroA = {};
    //@ts-ignore
    this.recetas = {};
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
    this._carroService.vaciarCarro();

    this.info = this._tokenService.getUserName();
    this._clienteService.listarClientes().subscribe(usuarios => {
      for (let usuario of usuarios) {
        let user: string = this.info;

        if (usuario.nombreUsuario.toString() == user) {
          this.pedido.cliente = usuario;
        } 
      }
    });
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
                this.carroT[j].manufacturado.nombre_articuloM ==
                objeto.manufacturado.nombre_articuloM
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
        if (contador < 1) {
          objeto.cantidad = 1;
          this.carroT.push(objeto);
        }
      }
    }
  }
  eliminarProducto(item: DetalleVenta) {
    if (this.carroT.length == 1) {
      this.carroT.splice(0, 1);
      this.calcularSubtotal();
      localStorage.clear();
    } else {
      for (let i = 0; i < this.carroT.length; i++) {
        if (this.carroT[i] == item) {
          this.carroT.splice(i, 1);
        }
      }
      this.calcularSubtotal();
      this.mantenerCarro();
    }

    this._carroService.vaciarCarro();
  }

  sumarEnvio() {
    this.pedido.con_envio = true;
    this.total += 50;
  }
  restarEnvio() {
    this.pedido.con_envio = false;
    this.total -= 50;
  }

  bajarStock(mercaderia: DetalleVenta) {
    var cantidad = mercaderia.cantidad;
    if (mercaderia.item == null) {
      this._recetaService.listarRecetasXIdPlato(mercaderia.manufacturado.id_artManuf).subscribe(recetas => {
        this.recetas = recetas;
        for (let element of this.recetas) {
          var numero = element.cantidad * cantidad;

          this.delay(200);
          this._articuloService
            .buscarXIdArticulo(element.articulo.id_articulo)
            .subscribe(data => {
              data.stock -= numero;
              //console.log("Stock de " + data.nombre_articulo + "= " + data.stock);
              this._articuloService.modificarArticulo(data).subscribe(() => {
                //console.log("stock descontado");
              });
            });
        }
      });
    } else if (mercaderia.manufacturado == null){
      this._articuloService
        .buscarXIdArticulo(mercaderia.item.id_articulo)
        .subscribe(recetas => {
          recetas.stock -= cantidad;
          this._articuloService.modificarArticulo(recetas).subscribe(() => {
           // console.log("bebida descontada");
          });
        });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  finalizarCompra() {
    if (this.carroT.length > 0) {
      for (let item of this.carroT) {
        this.bajarStock(item);

        this.delay(200);
      }

      this.pedido.observaciones = this.observaciones;
      this.pedido.nombreTemporal = this.nombreTemporal;

      this.pedido.fecha = new Date();
      this.pedido.total = this.total;
      this._pedidoService.crearPedido(this.pedido).subscribe(pedirijillo => {
        this.pedido = pedirijillo;

        console.log("Pedido Creado");

        for (let item of this.carroT) {
          item.pedido = this.pedido;

          this.delay(300);
          this._DetalleService.crearDetalleVenta(item).subscribe(() => {
            console.log("Se guardo la venta");
          });
        }
      });

      localStorage.clear();
      this.router.navigate(["tienda"]);
    }
  }
}
