import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Precio } from "../interfaces/precios.interface";

@Injectable({
  providedIn: "root"
})
export class PreciosService {

  constructor(private http: HttpClient) {}
  
  Url= "http://localhost:8080/api/v1/precios/";

  listarPrecios() {
    return this.http.get<Precio[]>(this.Url);
  }
  crearPrecio(item: Precio) {
    return this.http.post<Precio>(this.Url, item);
  }
  buscarXIdPrecio(id: number) {
    return this.http.get<Precio>(this.Url + id);
  }
  modificarPrecio(item: Precio) {
    return this.http.put<Precio>(this.Url + item.id_precio, item);
  }
}
