import { Component, OnInit } from '@angular/core';
import { Manufacturado } from 'src/app/interfaces/manufacturado.interface';
import { ManufacturadoService } from 'src/app/services/manufacturado.service';
import { Router } from '@angular/router';
import { DetalleRecetaService } from 'src/app/services/detalle-receta.service';
import { DetalleReceta } from 'src/app/interfaces/detalle-receta.interface';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  platos : Manufacturado [] = [];
  platosViejos : Manufacturado [] = [];

  ingredientes : DetalleReceta [] = [];

  constructor(
    private _platoService : ManufacturadoService,
    private _recetaService : DetalleRecetaService,
    private router: Router
  ) {}

  ngOnInit() {
    this._platoService.listarManufacturadosDisponibles(true).subscribe(data =>{
      this.platos = data;
    });

    this._platoService.listarManufacturadosDisponibles(false).subscribe(data =>{
      this.platosViejos = data;
    });
  }

  armarDato(item : Manufacturado){
    this._recetaService.listarRecetasXIdPlato(item.id_artManuf).subscribe(data=>{
      this.ingredientes=data;
    })
  }

  verReceta(){
    
  }

  nuevoPlato() {
    this.router.navigate(["agregarPlato"]);
  }

  editarPlato(plato: Manufacturado) {
    localStorage.setItem("id", plato.id_artManuf.toString());
    this.router.navigate(["editarPlato/"+plato.id_artManuf]);
  }

  ////////////////// REVISAR //////////////////////////
  bajaPlato(art: Manufacturado){
    art.enMenu = false;
    this._platoService.modificarManufacturado(art)
    .subscribe(() => {
      this.platos = this.platos.filter(p=>p!==art);
      }              
    );
      alert("Se dió de baja exitosamente");   
      location.reload();      
    }  

  ////////////////// REVISAR //////////////////////////
  altaPlato(art: Manufacturado){
    art.enMenu = true;
    this._platoService.modificarManufacturado(art)
    .subscribe(() => {
      this.platosViejos = this.platosViejos.filter(p=>p!==art);
      }              
    );      
      alert("Se dió de alta exitosamente");
      location.reload();   
  }  

}
