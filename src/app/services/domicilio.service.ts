import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from '../interfaces/domicilio.interface';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  domicilios: Domicilio[] = [];

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/domicilios/";
  

  listarDomicilios(){
    return this.http.get<Domicilio[]>(this.Url+"lista");
  }

  crearDomicilio(item: Domicilio){    
    return this.http.post<Domicilio>(this.Url+"nuevo", item);
  }

  buscarXIdDomicilio(id: number){
    return this.http.get<Domicilio>(this.Url+id);
  }

  buscarXTerminoDomicilio(numero: number, calle: string, distritoId:number, deptoId:number){
    this.listarDomicilios().subscribe(items => {
       for(let dom of items){
         if(dom.calle==calle && dom.numCasa==numero && dom.distrito.distrito_id==distritoId && dom.numDepartamento==deptoId){
           this.domicilios.push(dom);
         }
       }
       return this.domicilios;
    });    
  }

  modificarDomicilio(item:Domicilio){
    return this.http.put<Domicilio>(this.Url+"detalle/"+item.id_domicilio, item);
  }
}
