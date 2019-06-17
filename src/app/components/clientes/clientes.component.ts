import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/interfaces/cliente.interface";
import { ClienteService } from "src/app/services/cliente.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(
    private _clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    this._clienteService.listarClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  nuevoCliente() {
    this.router.navigate(["agregarCliente"]);
  }

  editarCliente(cliente: Cliente) {
    localStorage.setItem("id_usuario", cliente.id_usuario.toString());
    this.router.navigate(["editarCliente/"+cliente.id_usuario]);
  }
}
