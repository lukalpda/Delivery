import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ManufacturadoService } from "../../../services/manufacturado.service";
import { Manufacturado } from "../../../interfaces/manufacturado.interface";
import { CarroService } from "src/app/services/carro.service";

@Component({
  selector: "app-articulos-manufacturados",
  templateUrl: "./articulos-manufacturados.component.html",
  styleUrls: ["./articulos-manufacturados.component.css"]
})
export class ArticulosManufacturadosComponent implements OnInit {
  @Input() childMessage: string;

  articulosManufacturados: Manufacturado[] = [];
  carro: Manufacturado[] = [];

  categoria: string;
  constructor(
    private _articulosManufacturadosService: ManufacturadoService,
    private _carroService: CarroService,
    private router: Router
  ) {}
  ngOnInit() {
   
    this._articulosManufacturadosService
      .listarManufacturados()
      .subscribe(data => {
        this.articulosManufacturados = data;
      }); 

    console.log(this.articulosManufacturados);

    this._carroService.enviarCompraObservable.subscribe(response => {
      this.carro = response;
    });
  }

  public verArticulosManufacturados(idx: string) {
    this.router.navigate(["/articulosManufacturados", idx]);
  }
  cambiarCategoria(categoria: string) {
    this.childMessage = categoria;
  }

  cargarAlCarrito(manufacturado: Manufacturado) {
   
    this.carro.push(manufacturado);
    console.log(this.carro);
    this._carroService.enviarCompra(this.carro);
  }

  enviarCarrito(){
    this.router.navigate(["/carro"]);
  }
}
