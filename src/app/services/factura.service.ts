import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../interfaces/factura.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/facturas/";
  

  listarFacturas(){
    return this.http.get<Factura[]>(this.Url+"lista");
  }

  crearFactura(item: Factura){    
    return this.http.post<Factura>(this.Url+"nuevo", item);
  }

  buscarXIdFactura(id: number){
    return this.http.get<Factura>(this.Url+"detalle/"+id);
  }

  modificarFactura(item:Factura){
    return this.http.put<Factura>(this.Url+"actualizar/"+item.numFactura, item);
  }
}
