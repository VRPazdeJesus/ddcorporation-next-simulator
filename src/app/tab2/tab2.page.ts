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
  // Atributos para armazenar os dados do banco
  public dadosDia = new Map();
  public dadosSemana = new Map();
  public dadosMes = new Map();
  public dadosHistorico:Array<string> = [];
  public rendimentosHistorico:Array<number> = [];
  public profitDay = 0;
  public day:string;
  public profitWeekly = 0;
  public week:string;
  public profitMonthly = 0;
  public month:string;
  //Atributos dos gráficos que serão gerados
  @ViewChild('graficoHistoricoCanvas') graficoHistoricoCanvas;
  graficoHistorico: any;
  // Método construtor da classe
  constructor(public db: AngularFireDatabase, private toastCtrl: ToastController){
    this.consultaMes();
    this.consultaSemana();
    this.consultaDia();
    this.consultaHistorico();
  }
  // Métodos que irão retornar as informações do Firebase
  consultaDia() {
      this.db.list('/rendimento_diario')
        .snapshotChanges()
        .pipe(
          map(changes => {
            changes.map(a => {
              const key = a.payload.key;
              const value = a.payload.val();
              this.dadosDia.set(key, value);
            });
          }))
        .subscribe(
          (data) => {
            this.exibirGraficoDia();
        });
  }
  consultaSemana() {
    this.db.list('/rendimento_semanal')
      .snapshotChanges()
      .pipe(
        map(changes => {
          changes.map(a => {
            const key = a.payload.key;
            const value = a.payload.val();
            this.dadosSemana.set(key, value);
          });
        }))
      .subscribe(
        (data) => {
          this.exibirGraficoSemana();
      });
  }
  consultaMes() {
    this.db.list('/rendimento_mensal')
      .snapshotChanges()
      .pipe(
        map(changes => {
          changes.map(a => {
            const key = a.payload.key;
            const value = a.payload.val();
            this.dadosMes.set(key, value);
          });
        }))
      .subscribe(
        (data) => {
          this.exibirGraficoMes();
      });
  }
  consultaHistorico() {
    this.db.list('/rendimento_anual')
      .snapshotChanges()
      .pipe(
        map(changes => {
          changes.map(a => {
            const value = a.payload.val();
            const apelido = value['apelido'];
            const rendimentos = value['rendimentos'];
            console.log(apelido);
            console.log(rendimentos);
            this.dadosHistorico.push(apelido);
            this.rendimentosHistorico.push(rendimentos);
          });
        }))
      .subscribe(
        (data) => {
          this.graficoHistoricoGerador();
      });
  }
  // Métodos que irão gerar os gráficos no Chart.js
  graficoHistoricoGerador() {
    this.graficoHistorico = new Chart(this.graficoHistoricoCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: this.dadosHistorico,
          datasets: [{
              data: this.rendimentosHistorico,
              backgroundColor: [
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)',
                'rgba(234, 176, 67, 0.5)'
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
              ctx.font = "8px Arial";
              ctx.fillStyle = "rgba(228,228,228, 1)";
              chart.getDatasetMeta(i).data.forEach(function (p: any, j: any) {
                ctx.fillText(datasets[i].data[j]+'%', p._model.x, p._model.y - 5);
              });
            });
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              stepSize: 0.5,
              max : 17,
              display:false,
            }
          }],
          xAxes: [{
            ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  }
  // Passa as informações do banco de dados para os gráficos
  async exibirGraficoDia(){
    this.profitDay = this.dadosDia.get("rendimentos");
    this.day = this.dadosDia.get("dia");
  }
  async exibirGraficoSemana(){
    this.profitWeekly = this.dadosSemana.get("rendimentos");
    this.week = this.dadosSemana.get("periodo");
  }
  async exibirGraficoMes(){
    this.profitMonthly = this.dadosMes.get("rendimentos");
    this.month = this.dadosMes.get("dia");
  }
  //Métodos para o Toast
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
  
}
