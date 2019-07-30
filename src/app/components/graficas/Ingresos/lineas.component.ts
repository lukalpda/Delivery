import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";
import { ManufacturadoService } from "../../../services/manufacturado.service";
import { Manufacturado } from "../../../interfaces/manufacturado.interface";
import { Pedido } from "../../../interfaces/pedido.interface";
import { DetalleVenta } from "src/app/interfaces/detalle-venta.interface";
import { PedidoService } from "src/app/services/pedido.service";
import { DetalleVentaService } from "src/app/services/detalle-venta.service";
import * as moment from "moment";

@Component({
  selector: "app-lineas",
  templateUrl: "./lineas.component.html",
  styleUrls: ["./lineas.component.css"]
})
export class LineasComponent implements OnInit {
  manufBarra: Manufacturado[] = [];
  pedidosBarra: Pedido[] = [];
  arreAux: Pedido[] = [];
  model1: Date;
  model2: Date;
  Total = 0;

  color = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)"
  ];
  bordercolor = [
    "rgba(255,99,132,1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)"
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  chartdata = {
    labels: this.arreAux,
    datasets: [
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

  public barChartLabels: Label[] = ["Ingresos por Periodo Seleccionado"];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  llenarBarCharData() {
     for (let i = 0; i < this.arreAux.length; i++) {
    var temp: ChartDataSets = {
      data: [this.arreAux[i].total],
      label:  moment(this.arreAux[i].fecha).format('MMM'),
      backgroundColor:this.color[i] 
    };
    this.barChartData.push(temp);
      }

    // var temp: ChartDataSets = {
    //   data: [this.Total],
    //   label: "Ingresos"
    // };
    // this.barChartData.push(temp);
  }

  public barChartData: ChartDataSets[] = [{ data: [], label: "" }];

  constructor(
    private _manufacturadoService: ManufacturadoService,
    private _pedidoService: PedidoService,
    private _detalleVentaService: DetalleVentaService
  ) {}

  ngOnInit() {
    this._manufacturadoService.listarManufacturados().subscribe(data => {
      this.manufBarra = data;
    });
  }

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  buscar() {
    this.buscarXIngresos();
    this.delay(1000).then(r => this.llenarBarCharData());
  }
  buscarXIngresos() {
    this.barChartData = [];
    this.arreAux = [];
    //debugger;
    let fecha1 = this.model1.toISOString();
    let fecha2 = this.model2.toISOString();
    this._pedidoService.listarPedidos().subscribe(data => {
      //busco todos los pedidos
      for (let item of data) {
        if ( item.fecha.toString() < fecha2 && item.fecha.toString() > fecha1 && item.fechaAnulado == null ) {
          debugger;
          let mesNo=true;
          if (this.arreAux.length > 0){
            for(let i =0;i<this.arreAux.length;i++){
              if( moment(this.arreAux[i].fecha).format('MMM') == moment(item.fecha).format('MMM')){
                this.arreAux[i].total += item.total;
                mesNo=false;
//                console.log(moment(item.fecha).format('MMM'));
              }
            }
            if(mesNo){
              this.arreAux.push(item);
            }

          }else{
            this.arreAux.push(item);
            console.log("primera carga");
          }
          
        }
      }
    });
  }

  /*
  buscarXIngresos() {
    this.barChartData = [];
    this.arreAux = [];
    //debugger;
    let fecha1 = this.model1.toISOString();
    let fecha2 = this.model2.toISOString();
    this._pedidoService.listarPedidos().subscribe(data => {
      //busco todos los pedidos
      for (let item of data) {
        if (
          item.fecha.toString() < fecha2 &&
          item.fecha.toString() > fecha1 &&
          item.fechaAnulado == null
        ) {
          this.Total += item.total;
          console.log(this.Total);
        }
      }
    });
  }
  */
}
