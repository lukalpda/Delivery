import { Component, OnInit } from '@angular/core';
import {Manufacturado} from '../../../interfaces/manufacturado.interface';
import {ManufacturadoService} from '../../../services/manufacturado.service';

@Component({
  selector: 'app-barras-prime-ng',
  templateUrl: './barras-prime-ng.component.html',
  styleUrls: ['./barras-prime-ng.component.css']
})
export class BarrasPrimeNgComponent implements OnInit {

  manufacturadoD: Manufacturado;
  manufacturadosD: Manufacturado[]=[];

  data: any;
  public barCharOptions: any = {
    scaleShowVerticalLines:false,
    responsive: true
  };

  constructor(private _manufacturadoService: ManufacturadoService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [15,25,14,85]/*(function(){
            let data = [];
            let cantPedidos =0;
            for(let i = 0; i<=0;i++){
              data.push({
                cantPedidos = this.totalPedido + manufacturados.precioM;
              });
            }
            return data;
          }())*/
        }
      ]
    }
  }

  ngOnInit() {
    this._manufacturadoService.listarManufacturados().subscribe(resp=>{
      this.manufacturadosD = resp;
    })
  }

}
