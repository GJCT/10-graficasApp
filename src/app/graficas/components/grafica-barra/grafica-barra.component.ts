import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: []
})
export class GraficaBarraComponent implements OnInit{
   
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() line: boolean = false;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#705CFD' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#CB66FA' }
    ]
  };

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 
    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      48,
      40,
      Math.round(Math.random() * 100),
      86,
      Math.round(Math.random() * 100),
      90 
    ];

    this.chart?.update();
  }

  ngOnInit(): void {
    if(this.line){
      this.barChartType = 'line';
    }
  }
}
