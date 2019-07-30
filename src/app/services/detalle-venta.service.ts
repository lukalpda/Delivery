import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DetalleVenta} from '../interfaces/detalle-venta.interface';
import {Pedido} from '../interfaces/pedido.interface';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  pedido: Pedido;
  detalles: DetalleVenta[];
  constructor(private http: HttpClient) { }

  Url= "http://localhost:8080/api/v1/detalles_factura/";

  listarDetalleVentas(){
    return this.http.get<DetalleVenta[]>(this.Url+'lista')
  }

  listarXPedido(idPedido: number){
    return this.http.get<DetalleVenta[]>(this.Url+"porPedido/"+idPedido)
  }
  crearDetalleVenta(item: DetalleVenta){
    return this.http.post<DetalleVenta>(this.Url+'nuevo', item);
  }

  buscarXIdDetalleVenta(id: number){
    return this.http.get<DetalleVenta>(this.Url+'detalle/'+id);
  }

  modificarDetalleVenta(item:DetalleVenta){
    return this.http.put<DetalleVenta>(this.Url+'actualizar/'+item.idDetalle, item);
  }

}
