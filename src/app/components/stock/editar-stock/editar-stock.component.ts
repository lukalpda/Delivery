import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { UnidadMedida } from 'src/app/interfaces/unidad.medida.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { UnidadMedidaService } from 'src/app/services/unidad-medida.service';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/interfaces/articulo.interface';

@Component({
  selector: 'app-editar-stock',
  templateUrl: './editar-stock.component.html',
  styleUrls: ['./editar-stock.component.css']
})
export class EditarStockComponent implements OnInit {

  categorias : Categoria[] = [];
  medidas : UnidadMedida[] = [];
  art : Articulo;

  constructor(
      private _categoriaService:CategoriaService,
      private _medidaService:UnidadMedidaService,
      private _articuloService:ArticuloService,
      private router: Router
  ) {}

  ngOnInit() {
    this.llenarCombos();
    this.completarArt();
  }

  llenarCombos(){
    this._categoriaService.listarCategorias().subscribe(data =>{
      this.categorias = data;
    });

    this._medidaService.listarUnidadesMedida().subscribe(data =>{
      this.medidas = data;
    });    
  }

  completarArt(){
    let id=localStorage.getItem("id_articulo");
    this._articuloService.buscarXIdArticulo(+id)
    .subscribe(data=>{this.art=data});
  }




}
