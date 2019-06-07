import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/interfaces/cliente.interface";
import { Router } from "@angular/router";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-agregar-cliente",
  templateUrl: "./agregar-cliente.component.html",
  styleUrls: ["./agregar-cliente.component.css"]
})
export class AgregarClienteComponent implements OnInit {
  clientePost: Cliente;
  constructor(
    private router: Router,
    private _agregarClienteService: ClienteService
  ) {
    
  }

  ngOnInit() {}

  Guardar() {
    this._agregarClienteService
      .crearCliente(this.clientePost)
      .subscribe(data => {
        alert("Se guardó con éxito");
        this.router.navigate(["Listo"]);
      });
  }
  Volver() {
    this.router.navigate(["clientes"]);
  }
}
