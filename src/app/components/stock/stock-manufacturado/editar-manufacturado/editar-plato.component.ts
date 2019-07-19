import { Component, OnInit } from '@angular/core';
import { DetalleReceta } from 'src/app/interfaces/detalle-receta.interface';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { Articulo } from 'src/app/interfaces/articulo.interface';
import { Manufacturado } from 'src/app/interfaces/manufacturado.interface';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ManufacturadoService } from 'src/app/services/manufacturado.service';
import { DetalleRecetaService } from 'src/app/services/detalle-receta.service';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.component.html',
  styleUrls: ['./editar-plato.component.css']
})
export class EditarPlatoComponent implements OnInit {



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
    this.man = {};
  }
  

  public cantidad = 0;
  public ingredienteTemp : DetalleReceta[] = [];

  ngOnInit() {
    this.llenarCombos();
    this.completarPlato();  
    // this.mostrarIngredientes();  
  }

  completarPlato(){
    let id=localStorage.getItem("id");
    debugger;
    this._manufacturadosService.buscarXIdManufacturado(+id)
    .subscribe(data=>{
      this.man=data;
      this.cat=data.categoriaManuf;
      this._detalleService.listarRecetasXIdPlato(this.man.id_artManuf).subscribe(x=>{        
        this.ingredienteTemp=x;
      });
    });    
  }

  mostrarIngredientes(){
    this._detalleService.listarRecetasXIdPlato(this.man.id_artManuf).subscribe(data=>{
      this.ingredienteTemp=data;
    });
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
    if(ingrediente.id_receta){
      let id = ingrediente.id_receta;
      ingrediente.articuloManuf=null;
      this._detalleService.modificarDetalleReceta(ingrediente, id).subscribe(()=>{
        if (index > -1) this.ingredienteTemp.splice(index, 1);
      })
    }else{
      if (index > -1) this.ingredienteTemp.splice(index, 1);
    }     
  };

  EditarPlato(){
    this.man.categoriaManuf = this.cat;
    this._manufacturadosService.modificarManufacturado(this.man).subscribe(data=>{      
      this.man = data;      
    })    
    
    for(let recet of this.ingredienteTemp){
      if(!recet.id_receta){
        recet.articuloManuf = this.man;
        this._detalleService.crearDetalleReceta(recet).subscribe(()=>{
          console.log("este ingrediente:"+recet.articulo.nombre_articulo+" se cargó para: "+recet.articuloManuf.nombre_articuloM);
        });
      }      
    }
    this.router.navigate(["platos"]);
  }

  Volver() {
    this.router.navigate(["platos"]);
  }

}
