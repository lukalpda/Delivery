import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArticuloService} from '../../../../services/articulo.service';
import {Articulo} from '../../../../interfaces/articulo.interface';
import { UnidadMedida } from 'src/app/interfaces/unidad.medida.interface';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { UnidadMedidaService } from 'src/app/services/unidad-medida.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-agregar-stock',
  templateUrl: './agregar-stock.component.html',
  styleUrls: ['./agregar-stock.component.css']
})
export class AgregarStockComponent implements OnInit {

  public categorias : Categoria[] = [];
  public medidas : UnidadMedida[] = [];

  public cat : Categoria;
  public med : UnidadMedida;
  public art: Articulo;

  constructor(
    private router: Router,
    private _medidaService : UnidadMedidaService,
    private _categoriaService : CategoriaService,
    private _agregarArticuloService : ArticuloService
  ) {
    //@ts-ignore
    this.cat = {};
    //@ts-ignore
    this.med = {};
    //@ts-ignore
    this.art = {};
  }

  ngOnInit() {
    this.llenarCombos();    
  }

  public llenarCombos(){
    this._categoriaService.listarCategorias().subscribe(data =>{
      this.categorias = data;
    });
    this._medidaService.listarUnidadesMedida().subscribe(data =>{
      this.medidas = data;
    });    
  }

  Guardar(cat : Categoria, med : UnidadMedida) {
    this.art.categoriaProd = cat;
    this.art.medidaProd = med;
    
    this._agregarArticuloService
      .crearArticulo(this.art)
      .subscribe(() => {
        alert("Se guardó artículo con éxito");
        this.router.navigate(["stock"]);
      });
  }

  Volver(){
    this.router.navigate(["stock"]);
  }
}
