import { Component, OnInit } from '@angular/core';
import { Manufacturado } from 'src/app/interfaces/manufacturado.interface';
import { ManufacturadoService } from 'src/app/services/manufacturado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  platos : Manufacturado [] = [];
  platosViejos : Manufacturado [] = [];

  constructor(
    private _platoService : ManufacturadoService,
    private router: Router
  ) { }

  ngOnInit() {
    this._platoService.listarManufacturadosDisponibles(true).subscribe(data =>{
      this.platos = data;
    });

    this._platoService.listarManufacturadosDisponibles(false).subscribe(data =>{
      this.platosViejos = data;
    });
  }

  nuevoPlato() {
    this.router.navigate(["agregarPlato"]);
  }


}
