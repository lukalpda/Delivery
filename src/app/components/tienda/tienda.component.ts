import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Manufacturado } from 'src/app/interfaces/manufacturado.interface';
@Component({
  selector: "app-tienda",
  templateUrl: "./tienda.component.html",
  styleUrls: ["./tienda.component.css"]
})
export class TiendaComponent implements OnInit {
  parentMessage: string= "1";
  
  constructor() {
    //this.parentMessage = "pizza";
  }
  ngOnInit() {
  }

  cambiarCategoria(parentMessage: string){
    this.parentMessage=parentMessage;    
  }

}
 