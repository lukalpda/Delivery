import { Injectable } from '@angular/core';
import { Manufacturado } from '../interfaces/manufacturado.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  carro: any[];
  private enviarCompraSubject =  new Subject<any[]>();
  enviarCompraObservable = this.enviarCompraSubject.asObservable();
  
  constructor() { }

  enviarCompra(carro: any[]){
    this.carro = carro;
    this.enviarCompraSubject.next(carro);
  }

}
