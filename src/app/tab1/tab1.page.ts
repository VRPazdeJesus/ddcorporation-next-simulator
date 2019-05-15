import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  // Variáveis dos inputs
  public investimentoMinimo:number;
  public investimento:number;
  public valorAplicado:number;
  public taxa:number;
  public pontos:number;
  public clique:boolean;
  public icon: string;
  // Variáveis do rendimento
  public rendimentoMes:number;
  public rendimentoAnual:number;
  public rendimentoAnualComInvestimento:number;
  public primeiroAno:Array<number> = [];
  // Variáveis do rendimento reaplicado
  public rendimentoAnualReaplicado:number;
  public rendimentoAnualComInvestimentoRe:number;
  public primeiroAnoReaplicado:Array<number> = [];

  constructor() {
    this.investimentoMinimo = 165;
    this.valorAplicado = 0;
    this.taxa = 12;
    this.pontos = 0;
    this.clique = false;
    this.icon = 'ios-add-circle-outline';
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
  }

  //calcula o valor aceitavel a ser aplicado, um valor que seja divisível pelo investimento mínimo
  marred(investimento:number, investimentoMinimo:number) {
    this.valorAplicado = (investimentoMinimo * (Math.trunc(investimento / investimentoMinimo)));
    console.log("O valor a ser aplicado será de: ", this.valorAplicado);
  }

  //calcula a quantidade de pontos para a rede
  pontosRede(valorAplicado:number, investimentoMinimo:number) {
    this.pontos = (valorAplicado/investimentoMinimo)*8;
    console.log("O valor de pontos será de: ", this.pontos);
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

  //clique no detalhamento
  toggleDetails() {
    if (this.clique) {
      this.clique = false;
      this.icon = 'ios-add-circle-outline';
    } else {
      this.clique = true;
      this.icon = 'ios-remove-circle-outline';
    }
  }
}
