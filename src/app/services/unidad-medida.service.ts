import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnidadMedida } from '../interfaces/unidad.medida.interface';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/api/v1/medidas/";
  

  listarUnidadesMedida(){
    return this.http.get<UnidadMedida[]>(this.Url+"lista");
  }

  crearUnidadMedida(item: UnidadMedida){    
    return this.http.post<UnidadMedida>(this.Url+"nuevo", item);
  }

  buscarXIdUnidadMedida(id: number){
    return this.http.get<UnidadMedida>(this.Url+"detalle/"+id);
  }

  modificarUnidadMedida(item:UnidadMedida){
    return this.http.put<UnidadMedida>(this.Url+"actualizar/"+item.id_medida, item);
  }
}
