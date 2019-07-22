import {Component, Input, NgModule, OnInit} from '@angular/core';
import {TokenService} from '../../../services/complementos/token.service';
import {AuthService} from '../../../services/complementos/auth.service';
import {Router} from '@angular/router';
import {UsuariosComponent} from '../../graficas/usuarios/usuarios.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  app_name = 'El Buen Sabor';

  @Input() user : string;
  info: any={};
  usuarios: UsuariosComponent[]=[];

  isLogin = false;
  roles: string[];
  authority: string;
  constructor(private _tokenService: TokenService, private router: Router) { }

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
        }else{
          this.authority = 'user';
          return true;
        }
      });
    }

  }

  logOut(): void {
    this._tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['home']);
  }
}
