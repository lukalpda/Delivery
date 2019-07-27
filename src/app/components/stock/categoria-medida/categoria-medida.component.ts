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
    private _medidaService: UnidadMedidaService
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
    this._medidaService.listarUnidadesMedida().subscribe(data2 => {
      this.medidas = data2;
    });
  }

  cargarMedida() {
    this._medidaService.crearUnidadMedida(this.medida).subscribe(() => {
      this._medidaService.listarUnidadesMedida().subscribe(data => {
        this.medidas=data;
      });      
      // location.reload();
    });
  }

  cargarCategoria() {
    this._categoriaService.crearCategoria(this.categoria).subscribe(data => {
          if (data.esPlato) {
            this.categoriasPlato.push(data);
          } else {
            this.categoriasArtic.push(data);
          }
      // location.reload();
    });
  }

  eliminarCategoria(item : Categoria){
    this._categoriaService.eliminarCategoria(item.id_categoria).subscribe(()=>{      
      this.categoriasPlato = this.categoriasPlato.filter(p=>p!==item);      
      this.categoriasArtic = this.categoriasArtic.filter(p=>p!==item);
      this._categoriaService.listarCategorias().subscribe(data => {
        for (let item of data) {
          if (item.esPlato) {
            this.categoriasPlato.push(item);
          } else {
            this.categoriasArtic.push(item);
          }
        }
      });
    })
  }

  eliminarMedida(item : UnidadMedida){
    this._medidaService.borrarUMedida(item.id_medida).subscribe(()=>{      
      this.medidas = this.medidas.filter(p=>p!==item);
      this._medidaService.listarUnidadesMedida().subscribe(data => {
        this.medidas=data;
      });
    })
  }
}
