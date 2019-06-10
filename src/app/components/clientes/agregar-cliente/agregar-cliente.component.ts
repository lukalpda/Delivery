import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/interfaces/cliente.interface";
import { Router } from "@angular/router";
import { ClienteService } from "src/app/services/cliente.service";
import { Domicilio } from "../../../interfaces/domicilio.interface";
import { DomicilioService } from "../../../services/domicilio.service";

@Component({
  selector: "app-agregar-cliente",
  templateUrl: "./agregar-cliente.component.html",
  styleUrls: ["./agregar-cliente.component.css"]
}) 
export class AgregarClienteComponent implements OnInit {
  clientePost: Cliente;
  domicilioPost: Domicilio;
  constructor(
    private router: Router,
    private _agregarClienteService: ClienteService,
    private _agregarDomicilioService: DomicilioService
  ) {
    //@ts-ignore
    this.clientePost = {};
    //@ts-ignore
    this.clientePost.direccion = {};
  }

  ngOnInit() {}

  Guardar() {
    this._agregarDomicilioService.crearDomicilio(this.clientePost.direccion).subscribe(data => {
      console.log("domicilio cargado");
      this.clientePost.direccion=data;
      this._agregarClienteService.crearCliente(this.clientePost).subscribe(data => {
        alert("Se guardó con éxito");
      this.router.navigate(["clientes"]);
      });
    });

  }
  Volver() {
    this.router.navigate(["clientes"]);
  }
}
