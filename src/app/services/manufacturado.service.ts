import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManufacturadoInterface } from '../components/interfaces/manufacturado.interface';

@Injectable({
  providedIn: 'root'
})
export class ManufacturadoService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8000/api/v1/manufacturados/";

  getManufacturados(){
    return this.http.get<ManufacturadoInterface[]>(this.Url);
  }

  createManufacturado(manufacturado: ManufacturadoInterface){
    return this.http.post<ManufacturadoInterface>(this.Url, manufacturado);
  }

  getManufacturado(id: number){
    return this.http.get<ManufacturadoInterface>(this.Url+"/"+id);
  }

  updateManufacturado(manufacturado:ManufacturadoInterface){
    return this.http.put<ManufacturadoInterface>(this.Url+"/"+manufacturado.id, manufacturado);
  }

  deleteManufacturado(manufacturado:ManufacturadoInterface){
    return this.http.delete<ManufacturadoInterface>(this.Url+"/"+manufacturado.id);
  }
}
