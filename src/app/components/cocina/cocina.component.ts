import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Pedido} from '../../interfaces/pedido.interface';
import {DetalleVenta, Time} from '../../interfaces/detalle-venta.interface';
import {PedidoService} from '../../services/pedido.service';
import {DetalleVentaService} from '../../services/detalle-venta.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {
  comandas: Pedido[] = [];
  detComanda: DetalleVenta[] = [];
  Agregado: string;

  times: Time[] = [
    {value: '(+5)', viewValue: 'Retrasar 5 Min'},
    {value: '(+10)', viewValue: 'Retrasar 10 Min'},
    {value: '(+20)', viewValue: 'Retrasar 20 Min'},
    {value: '(+30)', viewValue: 'Retrasar 30 Min'}
  ];

  isDisabled = false;
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private pedidoSer: PedidoService,
    private detSer: DetalleVentaService,
    private router: Router) { }

    ngOnInit() {
     this.pedidoSer.listarPedidos().subscribe(data => {
       this.comandas = data;
     });

     this.detSer.listarDetalleVentas().subscribe( data => {
       this.detComanda = data;
     });
    }

  triggerSomeEvent() {
    this.isDisabled = !this.isDisabled;
    return;
  }

  open(content) {
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

  Ready(id): void {
    this.comandas[id - 1].estadoListo = true;
    this.pedidoSer.modificarPedido(this.comandas[id - 1]).subscribe(data => {
      this.comandas[id - 1] = data;
      this.router.navigate(['cocina']);
    });
  }

  Cancel(id): void {
    // @ts-ignore
    this.comandas[id - 1].fechaAnulado = Date.now();
    this.pedidoSer.modificarPedido((this.comandas[id - 1])).subscribe( data => {
      this.comandas[id - 1] = data;
      this.router.navigate(['cocina']);
    });
  }

}
