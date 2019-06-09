import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClienteService } from "src/app/services/cliente.service";
import { Cliente } from "src/app/interfaces/cliente.interface";

@Component({
  selector: "app-editar-cliente",
  templateUrl: "./editar-cliente.component.html",
  styleUrls: ["./editar-cliente.component.css"]
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente;
  constructor(
    private router: Router,
    private _editarClienteService: ClienteService
  ) {  }

  ngOnInit() {
    this.editarCliente();
  }

  editarCliente() {
    let id = localStorage.getItem("id_usuario");
    debugger;
    this._editarClienteService.buscarXIdCliente(+id).subscribe(data => {
      this.cliente = data;
    });
  }

  actualizarCliente(cliente: Cliente) {
    this._editarClienteService.modificarCliente(cliente).subscribe(data => {
      cliente = data;
      alert("Se actualizo correctamente");
      this.router.navigate(["clientes"]);
    });
  }
  
  Volver() {
    this.router.navigate(["clientes"]);
  }
}
