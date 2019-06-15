import { Component, OnInit } from "@angular/core";
import { ArticuloService } from "src/app/services/articulo.service";
import { Router } from "@angular/router";
import { Articulo } from 'src/app/interfaces/articulo.interface';

@Component({
  selector: "app-articulo",
  templateUrl: "./articulo.component.html",
  styleUrls: ["./articulo.component.css"]
})
 
export class ArticuloComponent implements OnInit {

  articulos: Articulo[]=[];
  constructor(
    private _articuloService: ArticuloService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  public verArticulos(idx: string) {
    this.router.navigate(["/articulo", idx]);
  }
}
