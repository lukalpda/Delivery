import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Articulo} from '../../interfaces/articulo.interface';
import {ArticuloService} from '../../services/articulo.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  articulos: Articulo[] = [];
  mercancia: Articulo[] = [];

  constructor(
    private _articuloService: ArticuloService,
    private router: Router
  ) {}

  ngOnInit() {    
    this._articuloService.listarArticulosDisponiblesVenta(true).subscribe(data=>{
      this.mercancia = data;
    });

    this._articuloService.listarArticulosDisponiblesPrima(true).subscribe(data => {
      this.articulos = data;
    });

  }

  nuevoArticulo() {
    this.router.navigate(["agregarArticulo"]);
  }

  editarArticulo(articulo: Articulo) {
    localStorage.setItem("id_articulo", articulo.id_articulo.toString());
    this.router.navigate(["editarStock/"+articulo.id_articulo]);
  }

  bajaArticulo(art:Articulo){
    art.enLista = false;
    this._articuloService.modificarArticulo(art)
    .subscribe(()=>
    {
      alert("Se dió de baja exitosamente");
      
    });
    this.router.navigate(["stock"]);
  }  
}
