import { Component} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
// Firebase
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(public db: AngularFireDatabase, private toastCtrl: ToastController){
    this.tasksRef = db.list('/mensal');

    console.log(this.tasksRef)

    // this.tasks = this.tasksRef.snapshotChanges().pipe(
    //   map(changes => 
    //     changes.map(c => ({ key: c.payload.key,...c.payload.val() }))
    //   )
    // );
    this.tasks = this.tasksRef.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a => {
      const data = a.payload.key;
      const value = a.payload.val();
      console.log(data);
      console.log(value);
      return value;
      });
      }));
    
  }

  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  @ViewChild('doughnutCanvas2') doughnutCanvas2;
  doughnutChart2: any;

  @ViewChild('doughnutCanvas3') doughnutCanvas3;
  doughnutChart3: any;

  ngOnInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
    this.doughnutChartMethod2();
    this.doughnutChartMethod3();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: ['Jan-19', 'Fev-19', 'Mar-19', 'Abr-19', 'Mai-19', 'Jun-19', 'Jul-19', 'Ago-19', 'Set-19', 'Out-19', 'Nov-19', 'Dez-19'],
          datasets: [{
              label: 'Rendimento de',
              data: [ 12, 11, 13, 15, 14.5, 12.1, 13.3, 10.3, 11.6, 10.9, 13.1, 12.6],
              backgroundColor: [
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)',
                'rgba(234, 176, 67, 0.2)'
              ],
              borderColor: [
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        animation: {
          onComplete: function () {
            var ctx = this.chart.ctx;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            var chart = this;
            var datasets = this.config.data.datasets;
    
            datasets.forEach(function (dataset: Array<any>, i: number) {
              ctx.font = "10px Arial";
              ctx.fillStyle = "rgba(234, 176, 67, 1)";
              chart.getDatasetMeta(i).data.forEach(function (p: any, j: any) {
                ctx.fillText(datasets[i].data[j]+'%', p._model.x, p._model.y - 5);
              });
            });
          }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
          display: false
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Julho/19"],
          datasets: [{
              label: '% de Rendimentos',
              data: [9.3, 90.7],
              backgroundColor: [
                'rgba(234, 176, 67, 1)',
                'rgba(0, 0, 0, 0.1)'
              ],
              borderColor: [
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
              ],
              hoverBackgroundColor: [
                "#FFCE56"
              ]
          }]
      }

    });
  }

  doughnutChartMethod2() {
    this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Julho/19"],
          datasets: [{
              label: '% de Rendimentos',
              data: [9.3, 90.7],
              backgroundColor: [
                'rgba(234, 176, 67, 1)',
                'rgba(0, 0, 0, 0.1)'
              ],
              borderColor: [
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
              ],
              hoverBackgroundColor: [
                "#FFCE56"
              ]
          }]
      }

    });
  }

  doughnutChartMethod3() {
    this.doughnutChart3 = new Chart(this.doughnutCanvas3.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Julho/19"],
          datasets: [{
              label: '% de Rendimentos',
              data: [9.3, 90.7],
              backgroundColor: [
                'rgba(234, 176, 67, 1)',
                'rgba(0, 0, 0, 0.1)'
              ],
              borderColor: [
                'rgba(234, 176, 67, 1)',
                'rgba(234, 176, 67, 1)',
              ],
              hoverBackgroundColor: [
                "#FFCE56"
              ]
          }]
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
