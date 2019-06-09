import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArticuloService} from '../../../services/articulo.service';
import {Articulo} from '../../../interfaces/articulo.interface';

@Component({
  selector: 'app-agregar-stock',
  templateUrl: './agregar-stock.component.html',
  styleUrls: ['./agregar-stock.component.css']
})
export class AgregarStockComponent implements OnInit {

  articuloPost: Articulo;
  constructor(
    private router: Router,
    private _agregarArticuloService: ArticuloService
  ) {
    //@ts-ignore
    this.articuloPost = {};
  }

  ngOnInit() {}

  Guardar() {
    this._agregarArticuloService
      .crearArticulo(this.articuloPost)
      .subscribe(data => {
        alert("Se guardó con éxito");
        this.router.navigate(["stock"]);
      });
  }
  Volver(){
    this.router.navigate(["stock"]);
  }
}
