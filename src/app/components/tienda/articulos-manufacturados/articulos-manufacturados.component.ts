import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ManufacturadoService } from "src/app/services/manufacturado.service";
import { Manufacturado } from 'src/app/interfaces/manufacturado.interface';
import { PreciosService } from 'src/app/services/precios.service';
import { Precio } from 'src/app/interfaces/precios.interface';

@Component({
  selector: "app-articulos-manufacturados",
  templateUrl: "./articulos-manufacturados.component.html",
  styleUrls: ["./articulos-manufacturados.component.css"]
})
export class ArticulosManufacturadosComponent implements OnInit {
  @Input() childMessage: string;

  articulosManufacturados: Manufacturado[] = [];
  precios: Precio[] = [];
  categoria: string;
  habilitar: boolean = true;
  constructor(
    private _articulosManufacturadosService: ManufacturadoService,
    private _preciosService: PreciosService,
    private router: Router
  ) {}
  ngOnInit() {
    this._articulosManufacturadosService.listarManufacturados().subscribe(data =>{this.articulosManufacturados=data});
    this._preciosService.listarPrecios().subscribe(data => {this.precios=data});
    console.log(this.articulosManufacturados);
  }

  public verArticulosManufacturados(idx: string) {
    this.router.navigate(["/articulosManufacturados", idx]);
  }
  cambiarCategoria(categoria: string) {
    this.childMessage = categoria;
  }
  setHabilitar(): void {
    this.habilitar = this.habilitar == true ? false : true;
  }
}
