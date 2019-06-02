import { Component, OnInit } from "@angular/core";
import { ArticuloService } from "src/app/services/articulo.service";
import { Router } from "@angular/router";
import { PreciosService } from "src/app/services/precios.service";
import { Precio } from "src/app/interfaces/precios.interface";
<<<<<<< HEAD
import { Articulo } from 'src/app/interfaces/articulo.interface';

=======
import {Articulo} from '../../../interfaces/articulo.interface';
>>>>>>> a9abda79a471484a3a1e2aa4d191f440825fa2de

@Component({
  selector: "app-articulo",
  templateUrl: "./articulo.component.html",
  styleUrls: ["./articulo.component.css"]
})

export class ArticuloComponent implements OnInit {
  articulos: Articulo[] = [];
  precios: Precio[] = [];
  constructor(
    private _articuloService: ArticuloService,
    private _preciosService: PreciosService,
    private router: Router
  ) {}

  ngOnInit() {
    this._articuloService.listarArticulos().subscribe(data => {
      this.articulos = data;
    });
    this._preciosService.listarPrecios().subscribe(data => {
      this.precios = data;
    });
    console.log(this.articulos);
  }

  public verArticulos(idx: string) {
    this.router.navigate(["/articulo", idx]);
  }
}
