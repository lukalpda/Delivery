import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/complementos/auth.service';
import {Router} from '@angular/router';
import {NuevoUsuarioInterface} from '../../../interfaces/nuevo-usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  private usuario: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = '';

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.usuario = new NuevoUsuarioInterface(this.form.nombre, this.form.nombreUsuario, this.form.email, this.form.password, this.form.telefono);
    this.authService.registro(this.usuario).subscribe(data => {
        this.isRegister = true;
        this.isRegisterFail = false;
      },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg = error.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );
  }

}
