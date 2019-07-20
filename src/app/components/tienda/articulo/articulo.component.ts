import { Component, OnInit, Input } from "@angular/core";
import { ArticuloService } from "src/app/services/articulo.service";
import { Router } from "@angular/router";
import { Articulo } from "src/app/interfaces/articulo.interface";
import { CarroService } from "src/app/services/carro.service";

@Component({
  selector: "app-articulo",
  templateUrl: "./articulo.component.html",
  styleUrls: ["./articulo.component.css"]
})
export class ArticuloComponent implements OnInit {

  @Input() childMessage: string;
  articulos: Articulo[] = [];
  carroA: any[] = [];

  constructor(
    private _articuloService: ArticuloService,
    private _carroService: CarroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarArticulos();
    this._carroService.enviarCompraObservable.subscribe(
      response => {this.carroA = response;}
    );
  }

  cargarArticulos(): void {
    this._articuloService
      .listarArticulos().subscribe(
      data => {
        this.articulos = data;
      },
      (err: any) =>{
        console.log(err);
      }
    );
  }

  public verArticulos(idx: string) {
    this.router.navigate(["/articulos", idx]);
  }


  cargarAlCarrito(item: any) {
    this.carroA.push(item);
    console.log(this.carroA);
    this._carroService.enviarCompraA(this.carroA);
   // localStorage.setItem("carroA", JSON.stringify(this.carroA));

  }
  cambiarCategoria(categoria: string) {
    this.childMessage = categoria;
  }

  enviarCarrito(){
    this.router.navigate(["/carro"]);
  }
}
