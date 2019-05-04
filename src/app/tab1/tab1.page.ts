import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public dollar:number;
  public valorAplicado:number;
  public valorInvestido:number;
  public taxa:number;
  public totalRendimento:number;
  public rendimentoMensal:number;
  public rendimentoValorInvestido:number;
  public valorInvestidoDollar:number;
  public pontos:number;
  public primeiroAno:Array<number> = [];
  public segundoAno:Array<number> = [];

  constructor() {
    this.dollar = 3.30;
    this.valorAplicado = 0;
    this.valorInvestido = 0;
    this.taxa = 0;
    this.totalRendimento = 0;
    this.rendimentoMensal = 0;
    this.rendimentoValorInvestido = 0;
    this.valorInvestidoDollar = 0;
    this.pontos = 0;
  }

  //método chamado pelo clique do botão simular
  getSimular() {
    this.marred(this.valorAplicado,165);
    this.valorInvestidoDollar = this.valorInvestido/this.dollar;
    this.pontos = (this.valorInvestidoDollar / 50)*8;
    this.calcularMeses(this.valorInvestidoDollar, this.taxa);
  }

  marred(valorAplicado:number, multiplo:number) {
    //50 dolares x 3,30 da 165 reais
    let quantidade = valorAplicado / multiplo;
    this.valorInvestido = Math.trunc(quantidade) * 165;
  }

  //Cálculo dos rendimentos do primeiro e segundo ano
  calcularMeses(valorInvestido:number, taxa:number) {
    //investimentos do primeiro ano
    for(var i=0; i<12; i++) {
      this.primeiroAno[i] = valorInvestido*(taxa/100);
      this.totalRendimento = this.totalRendimento + this.primeiroAno[i];
    }
    this.rendimentoValorInvestido = valorInvestido + this.totalRendimento;
    this.rendimentoMensal = this.primeiroAno[0];
  }

}
