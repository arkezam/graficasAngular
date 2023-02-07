import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficaServis: GraficasService) {}

  ngOnInit(): void {
    this.graficaServis.getUsuariosRedes().subscribe((m) => {
      this.doughnutChartLabels =Object.keys(m),
      this.doughnutChartData = {
        labels: Object.keys(m),
        datasets: [
          {
            data: Object.values(m),
          },
        ],
      };
    });
  }
  // Doughnut
  public doughnutChartLabels: string[] = [
      'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];

  public donaData: number[] = [
    // 300,121,222
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  public colors: Color = 'blue';

  public doughnutChartType: ChartType = 'doughnut';
}
