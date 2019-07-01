import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ClienteService} from '../../../services/cliente.service';
import {Cliente} from '../../../interfaces/cliente.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  data: any;
  clientes: Cliente[]=[];

  constructor(private _clientesService: ClienteService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Alta',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [this._clientesService.listarClientes()]
        }
      ]
    }
  }


  ngOnInit() {
    this._clientesService.listarClientes().subscribe(resp=>{
      this.clientes = resp;
    })
  }




}
