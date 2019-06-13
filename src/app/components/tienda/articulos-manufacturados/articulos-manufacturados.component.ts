import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ManufacturadoService } from "../../../services/manufacturado.service";
import { Manufacturado } from "../../../interfaces/manufacturado.interface";

@Component({
  selector: "app-articulos-manufacturados",
  templateUrl: "./articulos-manufacturados.component.html",
  styleUrls: ["./articulos-manufacturados.component.css"]
})
export class ArticulosManufacturadosComponent implements OnInit {
  @Input() childMessage: string;

  articulosManufacturados: Manufacturado[] = [];
<<<<<<< HEAD
  carro: Manufacturado[] = [];
=======
  precioXArticuloManuf: number[] = [];
>>>>>>> 7a53dc37b5f3515fc0e2994e172282ebc380c926
  categoria: string;
  constructor(
    private _articulosManufacturadosService: ManufacturadoService,
    private router: Router
  ) {}
  ngOnInit() {
    this._articulosManufacturadosService
      .listarManufacturados()
      .subscribe(data => {
        this.articulosManufacturados = data;
      });

    console.log(this.articulosManufacturados);
  }

  public verArticulosManufacturados(idx: string) {
    this.router.navigate(["/articulosManufacturados", idx]);
  }
  cambiarCategoria(categoria: string) {
    this.childMessage = categoria;
  }
  cargarAlCarrito(manufacturado: Manufacturado){
    this.carro.push(manufacturado);
    console.log(this.carro);
    
  }
}
