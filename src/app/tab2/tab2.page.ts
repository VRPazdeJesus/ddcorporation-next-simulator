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
    
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Rendimentos',
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
                data: [12, 11, 13, 15, 14.5, 12.1, 13.3, 10.3, 11.6, 10.9, 13.1, 12.6],
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
