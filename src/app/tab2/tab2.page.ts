import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import { ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private db: AngularFireDatabase, private toastCtrl: ToastController){

  }

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  ngOnInit() {
    
    this.lineChartMethod();
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement,
      {
         type: 'line',
         data: {
            labels: this.chartLabels,
            datasets: [{
               label                 : 'Daily Technology usage',
               data                  : this.chartValues,
               duration              : 2000,
               easing                : 'easeInQuart',
               backgroundColor       : this.chartColours,
               hoverBackgroundColor  : this.chartHoverColours,
               fill 				   : false
            }]
         },
         options : {
            maintainAspectRatio: false,
            legend         : {
               display     : true,
               boxWidth    : 80,
               fontSize    : 15,
               padding     : 0
            },
            scales: {
               yAxes: [{
                  ticks: {
                     beginAtZero:true,
                     stepSize: 5,
                     max : 100
                  }
               }],
               xAxes: [{
                  ticks: {
                     autoSkip: false
                  }
               }]
            }
         }
      });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
            {
                label: 'Últimos 7 meses',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(234, 176, 67, 0.4)',
                borderColor: 'rgba(234, 176, 67, 1)',
                borderCapStyle: 'square',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'round',
                pointBorderColor: 'rgba(234, 176, 67, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(234, 176, 67, 1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            }
        ]
      }
    });
  }



  async updateToast() {
    let toast = await this.toastCtrl.create({
      message: 'Valores atualizados :)',
      duration: 3000
    });
    toast.present();
  }

  async notUpdateToast() {
    let toast = await this.toastCtrl.create({
      message: 'Não foi possível atualizar valores :(',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    
  }

  
}
