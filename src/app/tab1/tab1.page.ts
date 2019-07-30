import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit, OnDestroy, AfterViewInit {
  // Variáveis dos inputs
  public investimentoMinimo:number;
  public investimento:number;
  public valorAplicado:number;
  public taxa:number = 0;
  public pontos:number;
  public clique:boolean;
  public icon: string;
  public backButtonSubscription;
  // Variáveis do rendimento
  public rendimentoMes:number;
  public rendimentoAnual:number;
  public rendimentoAnualComInvestimento:number;
  public primeiroAno:Array<number> = [];
  // Variáveis do rendimento reaplicado
  public rendimentoAnualReaplicado:number;
  public rendimentoAnualComInvestimentoRe:number;
  public primeiroAnoReaplicado:Array<number> = [];

  constructor(private platform: Platform) {
    this.investimentoMinimo = 50;
    this.valorAplicado = 0;
    this.taxa = 0;
    this.pontos = 0;
    this.clique = false;
    this.icon = 'ios-arrow-down';
    this.rendimentoMes = 0;
    this.rendimentoAnual = 0;
    this.rendimentoAnualComInvestimento = 0;
    this.rendimentoAnualReaplicado = 0;
    this.rendimentoAnualComInvestimentoRe = 0;
  }

  //método chamado pelo clique do botão simular
  getSimular() {
    this.marred(this.investimento, this.investimentoMinimo);
    this.pontosRede(this.valorAplicado, this.investimentoMinimo);
    this.calculaRendimentos(this.valorAplicado, this.taxa);
    this.calculaRendimentosReaplicados(this.valorAplicado, this.taxa);
  }

  //calcula o valor aceitavel a ser aplicado, um valor que seja divisível pelo investimento mínimo
  marred(investimento:number, investimentoMinimo:number) {
    this.valorAplicado = (investimentoMinimo * (Math.trunc(investimento / investimentoMinimo)));
  }

  //calcula a quantidade de pontos para a rede
  pontosRede(valorAplicado:number, investimentoMinimo:number) {
    this.pontos = (valorAplicado/investimentoMinimo)*8;
  }

  //calcula os rendimentos a juros simples
  calculaRendimentos(valorAplicado:number, taxa:number) {
    var mes;
    this.rendimentoAnual = 0;
    this.rendimentoAnualComInvestimento = 0;
    for(mes = 1; mes < 13; mes++) {
      this.primeiroAno[mes] = (valorAplicado * (taxa/100));
      this.rendimentoAnual = this.rendimentoAnual + this.primeiroAno[mes];
    }
    this.rendimentoMes = this.primeiroAno[1];
    this.rendimentoAnualComInvestimento = this.rendimentoAnual + valorAplicado;
  }

  //calcula os rendimentos a juros compostos
  calculaRendimentosReaplicados(valorAplicado:number, taxa:number) {
    var mes;
    var mesPassado;
    var m;
    var acumuladoJurosSimples = 0;
    var acumuladoJurosCompostos = 0;
    var rendimento = 0;
    this.rendimentoAnualReaplicado = 0;
    this.rendimentoAnualComInvestimentoRe = 0;
    var indice:Array<number> = [];
    for(mes = 1; mes < 13; mes++) {
      if(mes == 1){
        rendimento = 0;
        this.primeiroAnoReaplicado[mes] = rendimento;
        indice.push(mes);
      } else {
        for(mesPassado = 1; mesPassado < mes; mesPassado++) {
          acumuladoJurosSimples = acumuladoJurosSimples + this.primeiroAno[mesPassado];
        }
        if(acumuladoJurosSimples < 50) {
          rendimento = 0;
          this.primeiroAnoReaplicado[mes] = rendimento;
          indice.push(mes);
        } else if(acumuladoJurosSimples >= 50) {
          for( m = 1; m < mes; m++) {
            acumuladoJurosCompostos = acumuladoJurosCompostos + this.primeiroAnoReaplicado[m];
          }
          rendimento = ((valorAplicado + this.primeiroAno[1] + acumuladoJurosCompostos) * (taxa/100));
          this.primeiroAnoReaplicado[mes] = rendimento;
        }
        acumuladoJurosCompostos = 0;
      }
    }
    for(mes = 1; mes < 13; mes++) {
      this.rendimentoAnualReaplicado = this.rendimentoAnualReaplicado + this.primeiroAnoReaplicado[mes];
    }
    rendimento = 0;
    for(mes = 0; mes < indice.length; mes++) {
      rendimento = rendimento + this.primeiroAno[indice[mes]];
    }
    this.rendimentoAnualReaplicado = this.rendimentoAnualReaplicado + rendimento;
    this.rendimentoAnualComInvestimentoRe = this.rendimentoAnualReaplicado + valorAplicado;
  }

  //clique no detalhamento
  toggleDetails() {
    if (this.clique) {
      this.clique = false;
      this.icon = 'ios-arrow-down';
    } else {
      this.clique = true;
      this.icon = 'ios-arrow-up';
    }
  }

  //Concotrle de inicialização e destruição da sessão
  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
}
