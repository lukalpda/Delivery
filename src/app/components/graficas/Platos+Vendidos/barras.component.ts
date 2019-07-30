import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import {ManufacturadoService} from '../../../services/manufacturado.service';
import {Manufacturado} from '../../../interfaces/manufacturado.interface';
import {Pedido} from '../../../interfaces/pedido.interface';
import { DetalleVenta } from 'src/app/interfaces/detalle-venta.interface';
import { PedidoService } from 'src/app/services/pedido.service';
import { DetalleVentaService } from 'src/app/services/detalle-venta.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  manufBarra: Manufacturado[]=[];
  pedidosBarra: Pedido[] = [];
  arreAux: DetalleVenta[]=[];
  model1: Date;
  model2: Date;

  color = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)'];
  bordercolor =  ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  chartdata = {
    labels: this.arreAux,
    datasets : [
      {
        label: this.arreAux,
        backgroundColor: this.color,
        borderColor: this.color,
        borderWidth: 2,
        hoverBackgroundColor: this.color,
        hoverBorderColor: this.bordercolor,
        data: this.arreAux
      }
    ]
  };

  public barChartLabels: Label[] = ['Ventas por Periodo Seleccionado'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  llenarBarCharData(){
    for(let i=0; i<this.arreAux.length;i++){
      var temp : ChartDataSets = {
        data: [this.arreAux[i].cantidad],
        label: this.arreAux[i].manufacturado.nombre_articuloM,
        backgroundColor:[this.color[i]],
        borderColor:[this.bordercolor[i]]
      };
      this.barChartData.push(temp);

    }
  }

  public barChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];

  constructor(private _manufacturadoService: ManufacturadoService,
    private _pedidoService: PedidoService,
    private _detalleVentaService: DetalleVentaService) {

  }

  ngOnInit() {
    this._manufacturadoService
      .listarManufacturados()
      .subscribe(data => {
        this.manufBarra = data;
      });

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
buscar() {
  this.buscarXPeriodo();
  this.delay(1000).then(r => this.llenarBarCharData());

}
  buscarXPeriodo(){
    this.barChartData=[];
    this.arreAux=[];
    //debugger;
    let fecha1 = this.model1.toISOString();
    let fecha2 = this.model2.toISOString();
    //this.model1 = new Date("2019-07-20T17:35:13.000");
    //this.model2 = new Date(this.model1 = new Date("2019-07-29T17:35:13.000"));
    this._pedidoService.listarPedidos().subscribe(data => {  //busco todos los pedidos
      for (let item of data) {
        if (item.fecha.toString() < fecha2 && item.fecha.toString() > fecha1 && item.fechaAnulado == null) { //cada pedido entre las fechas especificadas y que no se haya anulado
          //console.log(item.fecha);
          this.delay(300);
          this._detalleVentaService.listarXPedido(item.numPedido).subscribe(data2 => { //busco los detalles de cada pedidos
            //debugger;
            for (let detalle of data2) {
              if (this.arreAux.length > 0) {  //este es un arreglo temporal y reviso si ya tiene elementos guardados
                var platoNoEsta = true;
                for (let i = 0; i < this.arreAux.length; i++) {  //recorro el arreglo auxiliar
                  if (this.arreAux[i].manufacturado.id_artManuf == detalle.manufacturado.id_artManuf) { //veo si este detalle ya ha sido cargado en el arreglo auxiliar
                    //console.log("Elemento "+this.arreAux[i].manufacturado.id_artManuf);
                    this.arreAux[i].cantidad += detalle.cantidad;  //de haber sido cargado ya, al existente le sumo la cantidad
                    platoNoEsta = false;
                    //console.log("El plato "+detalle.manufacturado.nombre_articuloM+", tiene "+this.arreAux[i].cantidad);
                    //continue;
                  }
                  //break;
                }
                if (platoNoEsta) {  //si el detalle no existía ya en el arreglo auxiliar, el detalle se crea y se guarda
                  this.arreAux.push(detalle);
                  console.log(detalle.manufacturado.nombre_articuloM + " cantidad " + detalle.cantidad);
                }
              } else {  //si el arreglo auxiliar no tiene ningún elemento cargado, le agrego el primero
                this.arreAux.push(detalle);
                //console.log("Primer elemento "+detalle.manufacturado.nombre_articuloM);
              }
            }
            /*this.arreAux.sort((a , b) =>{   //ordeno según cantidad de veces que se hizo cada pedido
              if(a.cantidad > b.cantidad){
                return 1;
              }
            })*/
            //console.log(item.numPedido);
          })
        }
      }

    });
  }

}
