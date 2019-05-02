import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public investimento:any;

  constructor() {
    
  }

  simular() {
    console.log('O investimento foi de', this.investimento / 2);
  }

}
