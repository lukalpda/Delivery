import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import {ManufacturadoService} from '../../../services/manufacturado.service';
import {Manufacturado} from '../../../interfaces/manufacturado.interface';
import {Pedido} from '../../../interfaces/pedido.interface';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  manufBarra: Manufacturado[]=[];
  pedidosBarra: Pedido[] = [];
  color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
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
    labels: this.manufBarra,
    datasets : [
      {
        label: this.manufBarra,
        backgroundColor: this.color,
        borderColor: this.color,
        borderWidth: 2,
        hoverBackgroundColor: this.color,
        hoverBorderColor: this.bordercolor,
        data: this.pedidosBarra
      }
    ]
  };

  public barChartLabels: Label[] = ['2016','2017','2018' ,'2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [ 81, 56, 55, 40], label: 'Pizzas' },
    { data: [ 79, 26, 77, 35], label: 'Empanadas' },
    { data: [ 19, 86, 27, 90], label: 'Hamburguesas' },
  ];

  constructor(private _manufacturadoService: ManufacturadoService) {

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

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 87),
      Math.round(Math.random() * 90*2),
      Math.round(Math.random() * 85*4),
      Math.round(Math.random() * 56*7),
      Math.round(Math.random() * 100*3),
      Math.round(Math.random() * 89*5),
      Math.round(Math.random() * 90*6)];
    this.barChartData[0].data = data;
  }


}
