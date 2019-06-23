import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ManufacturadoService } from 'src/app/services/manufacturado.service';
import { Manufacturado } from 'src/app/interfaces/manufacturado.interface';

@Component({
  selector: 'app-agregar-plato',
  templateUrl: './agregar-plato.component.html',
  styleUrls: ['./agregar-plato.component.css']
})
export class AgregarPlatoComponent implements OnInit {

  public categorias : Categoria[] = [];
  public cat : Categoria;
  public man : Manufacturado;

  constructor(
    private router: Router,
    private _categoriaService : CategoriaService,
    private _agregarPlatoService : ManufacturadoService
  ) {
    //@ts-ignore
    this.cat = {};
    //@ts-ignore
    this.man = {};
   }

  ngOnInit() {
    this.llenarCombos();
  }

  public llenarCombos(){
    this._categoriaService.listarCategorias().subscribe(data =>{
      this.categorias = data;
    });
  }

  Guardar(cat : Categoria) {
    this.man.categoriaManuf = cat;
    
    this._agregarPlatoService
      .crearManufacturado(this.man)
      .subscribe(() => {
        alert("Se guardó plato con éxito");
        this.router.navigate(["plato"]);
      });
  }

  Volver(){
    this.router.navigate(["plato"]);
  }


}
