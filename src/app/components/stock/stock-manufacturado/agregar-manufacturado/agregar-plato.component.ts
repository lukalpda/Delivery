import { Component, OnInit } from "@angular/core";
import { Categoria } from "src/app/interfaces/categoria.interface";
import { Router } from "@angular/router";
import { ManufacturadoService } from "src/app/services/manufacturado.service";
import { Manufacturado } from "src/app/interfaces/manufacturado.interface";
import { CategoriaService } from "src/app/services/categoria.service";
import { DetalleReceta } from "src/app/interfaces/detalle-receta.interface";
import { DetalleRecetaService } from "src/app/services/detalle-receta.service";
import { Articulo } from "src/app/interfaces/articulo.interface";
import { ArticuloService } from "src/app/services/articulo.service";

@Component({
  selector: "app-agregar-plato",
  templateUrl: "./agregar-plato.component.html",
  styleUrls: ["./agregar-plato.component.css"]
})
export class AgregarPlatoComponent implements OnInit {
  public categorias: Categoria[] = [];
  public detalles: String[] = [];
  public articulos: Articulo[] = [];
  public cat: Categoria;
  public man: Manufacturado;
  public articulo: Articulo;

  constructor(
    private router: Router,
    private _categoriaService: CategoriaService,
    private _manufacturadosService: ManufacturadoService,
    private _detalleService: DetalleRecetaService,
    private _articuloService: ArticuloService
  ) {
    //@ts-ignore
    this.cat = {};
    //@ts-ignore
    this.man = {};
  }

  public cantidad = 0;
  public ingredienteTemp : DetalleReceta[] = [];

  ngOnInit() {
    this.llenarCombos();
  }

  public llenarCombos() {
    this._categoriaService.listarCategorias().subscribe(data => {
      this.categorias = data;
    });
    this._articuloService.listarArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

  agregarIngrediente(articulo: Articulo) {
    console.log(articulo);
    let ingr : DetalleReceta;
    //@ts-ignore
    ingr = {};
    ingr.cantidad = this.cantidad;
    ingr.articulo = articulo;
    this.ingredienteTemp.push(ingr);
  }

  removeItemTempOrder = (ingrediente: DetalleReceta) => {
    let index = this.ingredienteTemp.indexOf(ingrediente);
    if (index > -1) this.ingredienteTemp.splice(index, 1);
  };

  cargarPlato(){
    this.man.categoriaManuf = this.cat;  
    let x : Manufacturado; 
    this._manufacturadosService.crearManufacturado(this.man).subscribe(data=>{      
      this.man.id_artManuf = data.id_artManuf;      
      x = data;  
      for(let recet of this.ingredienteTemp){
        recet.articuloManuf = x;
        this._detalleService.crearDetalleReceta(recet).subscribe(()=>{
          console.log("este ingrediente:"+recet.articulo.nombre_articulo+" se cargó para: "+recet.articuloManuf.nombre_articuloM);
        });
      };
      this.router.navigate(["platos"]);     
    });
    
  }

  Volver() {
    this.router.navigate(["platos"]);
  }
}
