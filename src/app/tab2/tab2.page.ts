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
  public rendimentoDia:Array<number> = [0, 0];
  public dadosSemana = new Map();
  public rendimentoSemana:Array<number> = [0, 0];
  public dadosMes = new Map();
  public rendimentoMes:Array<number> = [0, 0];
  //Atributos dos gráficos que serão gerados
  @ViewChild('graficoHistoricoCanvas') graficoHistoricoCanvas;
  graficoHistorico: any;
  @ViewChild('graficoDiaCanvas') graficoDiaCanvas;
  graficoDia: any;
  @ViewChild('graficoSemanaCanvas') graficoSemanaCanvas;
  graficoSemana: any;
  @ViewChild('graficoMesCanvas') graficoMesCanvas;
  graficoMes: any;
  // Método construtor da classe
  constructor(public db: AngularFireDatabase, private toastCtrl: ToastController){
    this.consultaMes();
    this.consultaSemana();
    this.consultaDia();
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
  // Métodos que irão gerar os gráficos no Chart.js
  graficoHistoricoGerador() {
    this.graficoHistorico = new Chart(this.graficoHistoricoCanvas.nativeElement, {

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
              ctx.font = "8px Arial";
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
  graficoDiaGerador() {
    this.graficoDia = new Chart(this.graficoDiaCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Julho/19"],
          datasets: [{
              label: '% de Rendimentos',
              data: this.rendimentoDia,
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
  graficoSemanaGerador() {
    this.graficoSemana = new Chart(this.graficoSemanaCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Julho/19"],
          datasets: [{
              label: '% de Rendimentos',
              data: this.rendimentoSemana,
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
  graficoMesGerador() {
    this.graficoMes = new Chart(this.graficoMesCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Julho/19"],
          datasets: [{
              label: '% de Rendimentos',
              data: this.rendimentoMes,
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
  // Passa as informações do banco de dados para os gráficos
  async exibirGraficoDia(){
    let rendDia = this.dadosDia.get("rendimentos");
    let sobraDia =  10 - rendDia;
    this.rendimentoDia = [rendDia, sobraDia];
    this.graficoDiaGerador();
  }
  async exibirGraficoSemana(){
    let rendSemana = this.dadosSemana.get("rendimentos");
    let sobraSemana =  10 - rendSemana;
    this.rendimentoSemana = [rendSemana, sobraSemana];
    this.graficoSemanaGerador();
  }
  async exibirGraficoMes(){
    let rendMes = this.dadosMes.get("rendimentos");
    let sobraMes =  100 - rendMes;
    this.rendimentoMes = [rendMes, sobraMes];
    this.graficoMesGerador();
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
