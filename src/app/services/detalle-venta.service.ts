import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DetalleVenta} from '../interfaces/detalle-venta.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  Url= "http://localhost:8000/api/v1/apirest_detalles_factura/";
=======
  Url= "http://localhost:8000/api/v1/detalles_factura/";
>>>>>>> a9abda79a471484a3a1e2aa4d191f440825fa2de

  listarDetalleVentas(){
    return this.http.get<DetalleVenta[]>(this.Url)
  }
  crearDetalleVenta(item: DetalleVenta){
    return this.http.post<DetalleVenta>(this.Url, item);
  }

  buscarXIdDetalleVenta(id: number){
    return this.http.get<DetalleVenta>(this.Url+id);
  }

  modificarDetalleVenta(item:DetalleVenta){
    return this.http.put<DetalleVenta>(this.Url+item.detallef_id, item);
  }
}
