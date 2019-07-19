import {Injectable, Input} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {PedidoService} from './pedido.service';
import {Pedido} from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  webSocketEndPoint = 'http://localhost:8080';
  stompClient: any;
  @Input() comandas: Pedido[] = [];

  constructor(private PedidoSer: PedidoService) {}

  _connect() {
    console.log('Conexion Iniciada...');
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    // tslint:disable-next-line:variable-name
    const _this = this;
    _this.stompClient.connect({}, () => {
      _this.stompClient.subscribe('/' , () => {
        this.PedidoSer.listarPedidos().subscribe( data => {
          _this.comandas = data;
        });
      });
    }, this.errorCallBack);
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Desconectado');
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log('errorCallBack -> ' + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }
}
