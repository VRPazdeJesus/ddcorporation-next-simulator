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

  limpaDados() {
    this.valorAplicado = 0;
    this.valorInvestido = 0;
    this.taxa = 0;
    this.totalRendimento = 0;
    this.rendimentoMensal = 0;
    this.rendimentoValorInvestido = 0;
    this.valorInvestidoDollar = 0;
    this.pontos = 0;
    this.primeiroAno = [];
    this.segundoAno = [];
  }

  //método chamado pelo clique do botão simular
  getSimular() {
    this.marred(this.valorAplicado,165);
    this.valorInvestidoDollar = this.valorInvestido/this.dollar;
    console.log("Valor Investido em Dollar", this.valorInvestidoDollar);
    this.pontos = (this.valorInvestidoDollar / 50)*8;
    console.log("Pontos", this.pontos);
    this.calcularMeses(this.valorInvestido, this.taxa);
  }

  marred(valorAplicado:number, multiplo:number) {
    console.log("Valor aplicado", valorAplicado);
    console.log("Taxa", this.taxa);
    console.log("Multiplo", multiplo);
    
    //50 dolares x 3,30 da 165 reais
    let quantidade = valorAplicado / multiplo;
    console.log("Quantidade", quantidade);
    this.valorInvestido = Math.trunc(quantidade) * 165;
    console.log("Valor investido", this.valorInvestido);
  }

  //Cálculo dos rendimentos do primeiro e segundo ano
  calcularMeses(valorInvestido:number, taxa:number) {
    console.log("Valor investido", valorInvestido);
    console.log("Taxa", taxa);
    this.totalRendimento = 0;
    //investimentos do primeiro ano
    for(var i=0; i<12; i++) {
      this.primeiroAno[i] = valorInvestido*(taxa/100);
      this.totalRendimento = this.totalRendimento + this.primeiroAno[i];
    }
    console.log("Total rendimento", this.totalRendimento);
    this.rendimentoValorInvestido = valorInvestido + this.totalRendimento;
    console.log("Rendimentos com Valor investido", this.rendimentoValorInvestido);
    this.rendimentoMensal = this.primeiroAno[0];
    console.log("Rendimento mensal", this.rendimentoMensal);
  }

  

}
