import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../interfaces/categoria.interface';
import { UnidadMedida } from '../../../interfaces/unidad.medida.interface';
import { Articulo } from '../../../interfaces/articulo.interface';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-agregar-stock',
  templateUrl: './agregar-stock.component.html',
  styleUrls: ['./agregar-stock.component.css']
})
export class AgregarStockComponent implements OnInit {

  categorias : Categoria[];
  medidas : UnidadMedida[];
  categoria : Categoria;
  medida : UnidadMedida;
  articulo : Articulo;

  

  constructor(private router:Router, private service:ArticuloService) { }

  ngOnInit() {
  }  

  // Guardar(){
    
  //   this.articulo.id_categoria=this.categoria.categoria_id;
  //   this.articulo.id_medida=this.medida.tipo_medida_id;

  //   this.service.crearArticulo(this.articulo)
  //   .subscribe(data=>{
  //     alert("Se guardó con éxito");
  //     this.router.navigate(["stock"])
  //   })
  //}

}
