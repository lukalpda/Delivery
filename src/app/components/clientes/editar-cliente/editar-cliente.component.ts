import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClienteService } from "src/app/services/cliente.service";
import { Cliente } from "src/app/interfaces/cliente.interface";
import { NuevoUsuarioInterface } from 'src/app/interfaces/nuevo-usuario.interface';

@Component({
  selector: "app-editar-cliente",
  templateUrl: "./editar-cliente.component.html",
  styleUrls: ["./editar-cliente.component.css"]
})
export class EditarClienteComponent implements OnInit {
  cliente: NuevoUsuarioInterface;
  constructor(
    private router: Router,
    private _editarClienteService: ClienteService
  ) {  
    
    //@ts-ignore
    this.cliente = {};
  }

  ngOnInit() {
    this.editarCliente();
  }

  editarCliente() {
    let id = localStorage.getItem("id_usuario");
 
    this._editarClienteService.buscarXIdCliente(+id).subscribe(data => {
      this.cliente = data;
    });
  }

  actualizarCliente(cliente: NuevoUsuarioInterface) {
    this._editarClienteService.modificarCliente(cliente).subscribe(data => {
      cliente = data;
      alert("Se actualizo correctamente");
      this.router.navigate(["clientes"]);
    });
  }
  Volver(){
    this.router.navigate(["clientes"]);
  }
}
