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
  public taxa:any;
  public dolar:any;
  public valorAproximado:any;
  public pontos:any;
  public primeiroAno:Array<object> = [];
  public segundoAno:Array<object> = [];

  constructor(public http: Http) {
    this.dolar = 3;
    this.valorAproximado = 0;
    this.pontos = 0;
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
    this.valorAproximado = (this.investimento/this.dolar).toFixed(2);
    this.pontos = (this.valorAproximado / 50).toFixed(1);
    this.calculoMeses(this.investimento, this.taxa, this.dolar);
  }

  //Cálculo dos rendimentos do primeiro e segundo ano
  calculoMeses(investimento:any, taxa:any, dolar:any) {
    console.log(investimento);
    console.log(taxa);
    console.log(dolar);
  }

}
