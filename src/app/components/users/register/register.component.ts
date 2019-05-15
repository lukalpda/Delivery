import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: string;
  email: string;
  password: string;

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit() {
  }
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['home']);
      }).catch( err => console.log('err:' + err));
  }

}
