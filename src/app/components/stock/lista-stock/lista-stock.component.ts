import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../../interfaces/articulo.interface';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-stock',
  templateUrl: './lista-stock.component.html',
  styleUrls: ['./lista-stock.component.css']
})
export class ListaStockComponent implements OnInit {

  articulos : Articulo[];

  constructor(private service:ArticuloService, private router:Router) { }

  ngOnInit() {    
    this.listarArticulosDisponiblesEnLista();
  }

  listarArticulosDisponiblesEnLista(){
    this.service.listarArticulos().subscribe(data=>
      this.articulos = data.filter(p=>{p.esParaVenta == true}));
  }

}
