import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private http: HttpClient) {
    //pegando o valor da taxa atual do dollar
    this.http.get('https://api.exchangeratesapi.io/latest').subscribe((response) => {
      console.log(response['rates']);  
      console.log(response['rates']['USD']);
    });
  }
}
