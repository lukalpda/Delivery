import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtInterface } from '../../interfaces/jwt.interface';
import { NuevoUsuarioInterface } from '../../interfaces/nuevo-usuario.interface';
import {LoginUsuarioInterface} from '../../interfaces/login-usuario.interface';

const cabecera = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:8080/api/v1/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuarioInterface): Observable<JwtInterface> {
    return this.httpClient.post<JwtInterface>(this.authURL+'login', usuario, cabecera);
  }

  public registro(usuario: NuevoUsuarioInterface): Observable<any> {
    return this.httpClient.post<any>(this.authURL+'nuevo', usuario, cabecera);
  }
}
