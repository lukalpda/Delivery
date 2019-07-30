import {Component, Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {TokenService} from "../../../services/complementos/token.service";
import {Router} from "@angular/router";
import {UsuariosComponent} from "../../graficas/usuarios/usuarios.component";

@Component({
  selector: 'app-menu-gerente',
  templateUrl: './menu-gerente.component.html',
  styleUrls: ['./menu-gerente.component.css']
})
export class MenuGerenteComponent {

  @Input() user : string;
  info: any={};

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private _tokenService: TokenService, private router: Router, private breakpointObserver: BreakpointObserver) {}

  isLogin = false;
  roles: string[];
  authority: string;

  ngOnInit() {
    this.info={
      nombreUsuario: this._tokenService.getUserName()
    };
    if (this._tokenService.getToken()) {
      this.isLogin = true;
      this.roles = [];
      this.roles = this._tokenService.getAuthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }else if(rol=='ROLE_EMPLEADO'){
          this.authority = 'empleado';
          return false;
        }else{
          this.authority = 'user';
          return true;
        }
      });
    }

  }
}
