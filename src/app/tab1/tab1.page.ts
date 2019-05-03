import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public investimento:any;
  public investimentoArredondado:any;
  public taxa:any;
  public dolar:any;
  public valorEquivalenteDollar:any;
  public pontos:any;
  public primeiroAno:Array<number> = [];
  public totalPrimeiroAno:any;
  public totalPrimeiroAnoRendimentos:any;
  public totalPrimeiroAnoMes:any;
  public segundoAno:Array<number> = [];

  constructor(public http: Http) {
    this.dolar = 3;
    this.valorEquivalenteDollar = 0;
    this.pontos = 0;
    this.investimentoArredondado = 0;
    this.totalPrimeiroAno = 0;
    this.totalPrimeiroAnoRendimentos = 0;
    this.totalPrimeiroAnoMes = 0;
    this.getDollar();
  }

  //Busca e calcula o valor do dollar
  getDollar() {
    this.http.get('http://data.fixer.io/api/latest?access_key=5d0eb200bb9fb42872430c207728160f')
      .map(res => res.json()).subscribe(data => {
        let taxaDolar = data.rates['USD'];
        let taxaReal = data.rates['BRL'];
        let valorDolarReal = (taxaReal/taxaDolar).toFixed(2);
        this.dolar = valorDolarReal;
    });
  }

  //método chamado pelo clique do botão simular
  getSimular() {
    this.investimentoArredondado = (this.investimento - (this.investimento*0.01)).toFixed(2);
    this.valorEquivalenteDollar = (this.investimentoArredondado/this.dolar).toFixed(2);
    this.pontos = (this.valorEquivalenteDollar / 50).toFixed(1);
    this.calculoMeses(this.investimentoArredondado, this.taxa);
  }

  //Cálculo dos rendimentos do primeiro e segundo ano
  calculoMeses(investimento:any, taxa:any) {
    //investimentos do primeiro ano
    for(var i=0; i<12; i++) {
      this.primeiroAno[i] = (investimento*(taxa/100));
      this.totalPrimeiroAno = this.totalPrimeiroAno + this.primeiroAno[i];
    }
    console.log(this.totalPrimeiroAno);
    console.log(investimento);
    this.totalPrimeiroAnoRendimentos = (parseFloat(investimento) + parseFloat(this.totalPrimeiroAno)).toFixed(2);

  }

}
