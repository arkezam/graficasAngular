import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{

  @Input () alineacion:"x"|"y" = "y";
  @Input () horizontal=false;

  alineacion2:"x"|"y" = "x";

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions ={
        indexAxis: "y",

      }
    }
  }

 


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: this.alineacion2,
    // We use these empty structures as placeholders for dynamic theming.
    plugins: {
      legend: {
        display: false,
      },
      },
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
 
  };
  public barChartType: ChartType = 'bar';
 

  @Input() barChartData: ChartData<'bar'> = {
    labels: [ 

      
    //  '2006', '2007', '2008', '2009', '2010', '2011', '2012'
     
  ],
    datasets: [


      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ],
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

 

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
}
