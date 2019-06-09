import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/interfaces/cliente.interface";
import { Router } from "@angular/router";
import { ClienteService } from "src/app/services/cliente.service";
import {Domicilio} from '../../../interfaces/domicilio.interface';
import {DomicilioService} from '../../../services/domicilio.service';

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
    this.domicilioPost = {};
  }

  ngOnInit() {}

  Guardar() {

    this._agregarDomicilioService.crearDomicilio(this.domicilioPost).subscribe(data => {
      this.clientePost.direccion = JSON.stringify(data);
      console.log("domicilio cargado");
    });

    this._agregarClienteService
      .crearCliente(this.clientePost)
      .subscribe(data => {

        alert("Se guardó con éxito");
        this.router.navigate(["clientes"]);
      });
  }
  Volver(){
    this.router.navigate(["clientes"]);
  }
}
