import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/interfaces/cliente.interface";
import { ClienteService } from "src/app/services/cliente.service";
import { Router } from "@angular/router";
import { NuevoUsuarioInterface } from 'src/app/interfaces/nuevo-usuario.interface';

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
  clientes: NuevoUsuarioInterface[] = [];
  constructor(
    private _clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    this._clienteService.listarClientes().subscribe(
      data => {this.clientes = data;});
  }

  nuevoCliente() {
    this.router.navigate(["agregarCliente"]);
  }

  editarCliente(cliente: Cliente) {
    localStorage.setItem("id_usuario", cliente.idUsuario.toString());
    this.router.navigate(["editarCliente/"+cliente.idUsuario]);
  }
}
