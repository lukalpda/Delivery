import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../interfaces/cliente.interface';
import {ClienteService} from '../../services/cliente.service';
import {Router} from '@angular/router';
import {Articulo} from '../../interfaces/articulo.interface';
import {ArticuloService} from '../../services/articulo.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  articulos: Articulo[] = [];
  constructor(
    private _articuloService: ArticuloService,
    private router: Router
  ) {}

  ngOnInit() {
    this._articuloService.listarArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

  nuevoArticulo() {
    this.router.navigate(["agregarArticulo"]);
  }

  editarArticulo(articulo: Articulo) {
    localStorage.setItem("id_articulo", articulo.id_articulo.toString());
    this.router.navigate(["editarArticulo/"+articulo.id_articulo]);
  }

}
