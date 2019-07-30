import {Component, Input, OnInit} from '@angular/core';
import {Pedido} from "../../../interfaces/pedido.interface";
import {DetalleVenta} from "../../../interfaces/detalle-venta.interface";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PedidoService} from "../../../services/pedido.service";
import {DetalleVentaService} from "../../../services/detalle-venta.service";
import {Router} from "@angular/router";
import {WebsocketService} from "../../../services/websocket.service";
import * as moment from 'moment';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() comandas: Pedido[] = [];
  detComanda: DetalleVenta[] = [];
  DetVta: DetalleVenta;

  isDisabled = false;
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private pedidoSer: PedidoService,
    private detSer: DetalleVentaService,
    private router: Router,
    private wsService: WebsocketService) { }

  ngOnInit() {
    this.pedidoSer.listarPedidos().subscribe(data => {
      this.comandas = data;
    });
    /*
          this.wsService._connect();

          this.wsService.disconnect();*/

    this.detSer.listarDetalleVentas().subscribe( data => {
      this.detComanda = data;
    });
  }

  triggerSomeEvent() {
    return this.isDisabled = !this.isDisabled;
  }

  open(content) {
    if (this.isDisabled === true) {
      this.isDisabled = false;
    }
    // tslint:disable-next-line:max-line-length
    /* Buscar una mejor solucion para esto (Coloca de vuelta el valor original si el select de comandas del alert esta desactivado cuando se abre el modal)*/
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  Estimado(id): number {
    let max = 0;
    for (const i of this.detComanda) {
      if (i.pedido.numPedido === id && i.manufacturado.minutosPrep > max) {
        max = i.manufacturado.minutosPrep;
      }
    }
    return max;
  }
  eliminarComanda(item: Pedido){
    item.fechaAnulado = new Date();
    this.pedidoSer.modificarPedido(item).subscribe(() => {
      //this.pedidos = this.pedidos.filter(p=>p!==item);
      //location.reload();
      //this.remove(item);
    });
  }
  confirmarComanda(item: Pedido){
    item.estadoListo = true;
    this.pedidoSer.modificarPedido(item).subscribe(() => {
      //this.pedidos = this.pedidos.filter(p=>p!==item);
      //location.reload();
      //this.remove(item);
    });
  }

  Actions(id, tipo): void {
    const bid: string = (tipo.target as Element).id;
    switch (bid) {
      case 'suma':
        this.comandas[id - 1].demora += 5;
        break;
      case 'resta':
        this.comandas[id - 1].demora -= 5;
        break;
      /*case 'aceptar':
        this.comandas[id - 1].estadoListo = true;
        break;*/
      /*case 'cancelar':
        this.comandas[id - 1].fechaAnulado = moment().utc(true).toDate();
        break;*/
    }

    this.pedidoSer.modificarPedido((this.comandas[id - 1])).subscribe(data => {
      this.comandas[id - 1] = data;
    });
  }

}
