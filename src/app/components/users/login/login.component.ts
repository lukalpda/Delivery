import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  public isLogged = false ;
  public isError = false;
  public msgError = '';
  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoginEmail() {
    console.log(this.email + '  ' + this.password);
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['home']);
        this.isLogged = true;
        this.isError = false;
      }).catch(err => console.log('err:', err));
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
