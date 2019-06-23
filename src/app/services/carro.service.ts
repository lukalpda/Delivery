import { Injectable } from '@angular/core';
import { Manufacturado } from '../interfaces/manufacturado.interface';
import { Subject } from 'rxjs';
import { Articulo } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  carroM: Manufacturado[];
  carroA: Articulo[];
  private enviarCompraSubject =  new Subject<any[]>();
  enviarCompraObservable = this.enviarCompraSubject.asObservable();
  
  constructor() { }

  enviarCompraM(carro: Manufacturado[]){
    this.carroM = carro;
    this.enviarCompraSubject.next(carro);
  }

  enviarCompraA(carro: Articulo[]){
    this.carroA = carro;
    this.enviarCompraSubject.next(carro);
  }
}
