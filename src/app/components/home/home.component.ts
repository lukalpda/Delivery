import { Component, OnInit, Input } from '@angular/core';
import {TokenService} from '../../services/complementos/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Delivery El Buen Sabor';

  @Input() user: string;

  info: any={};

  constructor(private _tokenService: TokenService) { }

  ngOnInit() {
    this.info={
      token: this._tokenService.getToken(),
      nombreUsuario: this._tokenService.getUserName(),
      authorities: this._tokenService.getAuthorities()
    };
  }

}
