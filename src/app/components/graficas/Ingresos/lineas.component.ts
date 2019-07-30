import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {PedidoService} from '../../../services/pedido.service';
import {Pedido} from '../../../interfaces/pedido.interface';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css']
})
export class LineasComponent implements OnInit {

  arreAux: Pedido[]=[];
  model1: Date;
  model2: Date;

  public lineChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];

  llenarLineCharData(){
    for(let i=0; i<this.arreAux.length;i++){
      var temp : ChartDataSets = { data: [this.arreAux[i].total], label: this.arreAux[i].cliente.nombre};
      this.lineChartData.push(temp);
      this.lineChartLabels.push(this.arreAux[i].fecha.getMonth().toString());
    }
  }

  public lineChartLabels: Label[] = ['Ventas por Periodo Seleccionado'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'black',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartColors: Color[] = [  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private _pedidoService: PedidoService) { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  /*public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }*/

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  buscar() {
    this.buscarXMes();
    this.delay(1000).then(r => this.llenarLineCharData());

  }

  buscarXMes(){
    let fecha1 = this.model1.toISOString();
    let fecha2 = this.model2.toISOString();
    this._pedidoService.listarPedidos().subscribe(data=>{
      for(let i=0; i<data.length;i++){
        if(data[i].fecha.toString()<fecha2 && data[i].fecha.toString()>fecha1 && data[i].fechaAnulado==null){
          if(this.arreAux.length>0) {
            let mesNoEsta=true;
            for (let j = 0; j < this.arreAux.length; j++) {
              if (this.arreAux[j].fecha.getMonth().toString() == data[i].fecha.getMonth().toString()) {
                 this.arreAux[j].total += data[i].total;
                 mesNoEsta=false;
              }
            }
            if(mesNoEsta){
              this.arreAux.push(data[i]);
            }
          }else{
            this.arreAux.push(data[i]);
          }
        }
      }
    })
  }

}
