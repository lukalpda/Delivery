import { Injectable } from '@angular/core';
import { Manufacturado } from '../interfaces/manufacturado.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  carro: Manufacturado[];
  private enviarCompraSubject =  new Subject<Manufacturado[]>();
  enviarCompraObservable = this.enviarCompraSubject.asObservable();
  
  constructor() { }

  enviarCompra(carro: Manufacturado[]){
    this.carro = carro;
    this.enviarCompraSubject.next(carro);
  }

}
