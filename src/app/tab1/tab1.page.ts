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
  public primeiroAno:Array<object> = [];
  public segundoAno:Array<object> = [];

  constructor(public http: Http) {
    this.dolar = 3;
    this.valorAproximado = 0;
    this.getDollar();
  }

  getDollar() {
    this.http.get('http://data.fixer.io/api/latest?access_key=5d0eb200bb9fb42872430c207728160f')
      .map(res => res.json()).subscribe(data => {
        let taxaDolar = data.rates['USD'];
        let taxaReal = data.rates['BRL'];
        let valorDolarReal = (taxaReal/taxaDolar).toFixed(2);
        this.dolar = valorDolarReal;
    });
  }

  getSimular() {
    this.taxa = this.taxa;
    this.valorAproximado = (this.investimento/this.dolar).toFixed(2);
    this.calculoMeses(this.investimento, this.taxa, this.dolar);
  }

  calculoMeses(investimento:any, taxa:any, dolar:any) {

  }

}
