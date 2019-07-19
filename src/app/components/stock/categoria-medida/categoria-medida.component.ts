import { Component, OnInit } from "@angular/core";
import { UnidadMedidaService } from "src/app/services/unidad-medida.service";
import { CategoriaService } from "src/app/services/categoria.service";
import { Categoria } from "src/app/interfaces/categoria.interface";
import { UnidadMedida } from "src/app/interfaces/unidad.medida.interface";

@Component({
  selector: "app-categoria-medida",
  templateUrl: "./categoria-medida.component.html",
  styleUrls: ["./categoria-medida.component.css"]
})
export class CategoriaMedidaComponent implements OnInit {
  public categoriasPlato: Categoria[] = [];
  public categoriasArtic: Categoria[] = [];
  public medidas: UnidadMedida[] = [];

  public categoria: Categoria;
  public medida: UnidadMedida;

  constructor(
    private _categoriaService: CategoriaService,
    private _medidaServive: UnidadMedidaService
  ) {
    //@ts-ignore
    this.categoria = {};
    //@ts-ignore
    this.medida = {};

  }

  ngOnInit() {
    this.llenarListas();
  }

  llenarListas() {
    this._categoriaService.listarCategorias().subscribe(data => {
      for (let item of data) {
        if (item.esPlato) {
          this.categoriasPlato.push(item);
        } else {
          this.categoriasArtic.push(item);
        }
      }
    });
    this._medidaServive.listarUnidadesMedida().subscribe(data2 => {
      this.medidas = data2;
    });
  }

  cargarMedida() {
    this._medidaServive.crearUnidadMedida(this.medida).subscribe(() => {
      location.reload();
    });
  }

  cargarCategoria() {
    this._categoriaService.crearCategoria(this.categoria).subscribe(() => {
      location.reload();
    });
  }
}
