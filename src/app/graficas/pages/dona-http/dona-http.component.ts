import { Component, OnInit } from '@angular/core';
import { GraficasServicesService } from '../../services/graficas-services.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: []
})
export class DonaHttpComponent implements OnInit{
   // Doughnut
   public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
  ];
   public doughnutChartData: ChartData<'doughnut', number[]> = {
    //  labels: this.doughnutChartLabels,
    datasets: [
      //  { data: [ 350, 450, 100 ] }
    ]
   };
   public doughnutChartType: ChartType = 'doughnut';
      
  constructor(private graficasServices: GraficasServicesService){}
  
  ngOnInit(): void {
    // this.graficasServices.getUsusariosRedesSociales()
    //     .subscribe(data => {
    //       const labels = Object.keys(data);
    //       const values = Object.values(data);
        
    //     this.doughnutChartLabels = labels; 
    //     this.doughnutChartData.datasets.push();
    //   });


    this.graficasServices.getUsuariosData()
        .subscribe(({labels, values})=>{
          this.doughnutChartLabels = labels;
          this.doughnutChartData.datasets.push(values[1]);
        });
  }


}
