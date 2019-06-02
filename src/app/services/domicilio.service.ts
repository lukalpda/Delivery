import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from '../interfaces/domicilio.interface';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  public domicilios: Domicilio[] = [];
  
  
  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/apirest_domicilio/";
  

  listarDomicilios(){
    return this.http.get<Domicilio[]>(this.Url);
  }

  crearDomicilio(item: Domicilio){    
    return this.http.post<Domicilio>(this.Url, item);
  }

  buscarXIdDomicilio(id: number){
    return this.http.get<Domicilio>(this.Url+id);
  }

  buscarXTerminoDomicilio(numero: number, calle: string, distritoId:number, deptoId:number){
    this.listarDomicilios().subscribe(items => {
       for(let dom of items){
         if(dom.calle==calle && dom.numero_casa==numero && dom.id_distrito==distritoId && dom.numero_departamento==deptoId){
           this.domicilios.push(dom);
         }
       }
       return this.domicilios;
    });    
  }

  modificarDomicilio(item:Domicilio){
    return this.http.put<Domicilio>(this.Url+item.id_domicilio, item);
  }
}
