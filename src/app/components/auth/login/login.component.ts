import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/complementos/auth.service';
import {LoginUsuarioInterface} from '../../../interfaces/login-usuario.interface';
import {TokenService} from '../../../services/complementos/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: any = {};
  usuario: LoginUsuarioInterface;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  errorMsg = '';

  constructor(private _authService: AuthService, private _tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    if (this._tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this._tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.usuario = new LoginUsuarioInterface(this.form.nombreUsuario, this.form.password);

    this._authService.login(this.usuario).subscribe(data => {
        this._tokenService.setToken(data.token);
        this._tokenService.setUserName(data.nombreUsuario);
        this._tokenService.setAuthorities(data.authorities);

        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this._tokenService.getAuthorities();
        window.location.reload();
      },
      (err: any) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = err.error.message;
      }
    );
  }

  //firebase auth:export save_file.json --project <project-id>
}
