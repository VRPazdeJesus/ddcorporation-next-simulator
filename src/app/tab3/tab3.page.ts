import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateConfigService } from '../translate-config.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public investimento:number;
  public AUD:number = 0;
  public taxaAUD: number;
  public BGN:number = 0;
  public taxaBGN: number;
  public BRL:number = 0;
  public taxaBRL: number;
  public USD:number = 0;
  public taxaUSD: number;
  public CAD: number = 0;
  public taxaCAD:number;
  public CHF: number = 0;
  public taxaCHF:number;
  public CNY:number = 0;
  public taxaCNY:number;
  public CZK:number = 0;
  public taxaCZK:number;
  public DKK:number = 0;
  public taxaDKK:number;
  public EUR:number = 0;
  public GBP:number = 0;
  public taxaGBP:number;
  public HKD:number = 0;
  public taxaHKD:number;
  public IDR:number = 0;
  public taxaIDR:number;
  public INR:number = 0;
  public taxaINR:number;
  public JPY:number = 0;
  public taxaJPY:number;
  public KRW:number = 0;
  public taxaKRW:number;
  public MXN:number = 0;
  public taxaMXN:number;
  public NOK:number = 0;
  public taxaNOK:number;
  public PLN:number = 0;
  public taxaPLN:number;
  public SEK:number = 0;
  public taxaSEK:number;
  public THB:number = 0;
  public taxaTHB:number;
  public TRY:number = 0;
  public taxaTRY:number;
  public ZAR:number = 0;
  public taxaZAR:number;
  
  constructor(private http: HttpClient, private translateConfigService: TranslateConfigService, public alertController: AlertController) {
    //pegando o valor da taxa atual do dollar
    this.http.get('https://api.exchangeratesapi.io/latest').subscribe((response) => {
      console.log(response['rates']);  
      console.log(response['rates']['USD']);
      this.taxaAUD = response['rates']['AUD'];
      this.taxaBGN = response['rates']['BGN'];
      this.taxaBRL = response['rates']['BRL'];
      this.taxaUSD = response['rates']['USD'];
      this.taxaCAD = response['rates']['CAD'];
      this.taxaCHF = response['rates']['CHF'];
      this.taxaCNY = response['rates']['CNY'];
      this.taxaCZK = response['rates']['CZK'];
      this.taxaDKK = response['rates']['DKK'];
      this.taxaGBP = response['rates']['GBP'];
      this.taxaHKD = response['rates']['HKD'];
      this.taxaIDR = response['rates']['IDR'];
      this.taxaINR = response['rates']['INR'];
      this.taxaJPY = response['rates']['JPY'];
      this.taxaKRW = response['rates']['KRW'];
      this.taxaMXN = response['rates']['MXN'];
      this.taxaNOK = response['rates']['NOK'];
      this.taxaPLN = response['rates']['PLN'];
      this.taxaSEK = response['rates']['SEK'];
      this.taxaTHB = response['rates']['THB'];
      this.taxaTRY = response['rates']['TRY'];
      this.taxaZAR = response['rates']['ZAR'];
    });
  }
  //Quando digitar
  onKey(){
    this.AUD = this.investimento * (this.taxaAUD / this.taxaUSD);
    this.BGN = this.investimento * (this.taxaBGN / this.taxaUSD);
    //quantos reais em dollar
    this.BRL = this.investimento * (this.taxaBRL / this.taxaUSD);
    this.CAD = this.investimento * (this.taxaCAD / this.taxaUSD);
    this.CHF = this.investimento * (this.taxaCHF / this.taxaUSD);
    this.CNY = this.investimento * (this.taxaCNY / this.taxaUSD);
    this.CZK = this.investimento * (this.taxaCZK / this.taxaUSD);
    this.DKK = this.investimento * (this.taxaDKK / this.taxaUSD);
    this.EUR = this.investimento * (1 / this.taxaUSD);
    this.GBP = this.investimento * (this.taxaGBP / this.taxaUSD);
    this.HKD = this.investimento * (this.taxaHKD / this.taxaUSD);
    this.IDR = this.investimento * (this.taxaIDR / this.taxaUSD);
    this.INR = this.investimento * (this.taxaINR / this.taxaUSD);
    this.JPY = this.investimento * (this.taxaJPY / this.taxaUSD);
    this.KRW = this.investimento * (this.taxaKRW / this.taxaUSD);
    this.MXN = this.investimento * (this.taxaMXN / this.taxaUSD);
    this.NOK = this.investimento * (this.taxaNOK / this.taxaUSD);
    this.PLN = this.investimento * (this.taxaPLN / this.taxaUSD);
    this.SEK = this.investimento * (this.taxaSEK / this.taxaUSD);
    this.THB = this.investimento * (this.taxaTHB / this.taxaUSD);
    this.TRY = this.investimento * (this.taxaTRY / this.taxaUSD);
    this.ZAR = this.investimento * (this.taxaZAR / this.taxaUSD);
  }
  //alerta
  async selectLanguage() {
    const alert = await this.alertController.create({
      header: 'Idioma',
      buttons: [
        {
          text: 'English',
          handler: () => {
            let selectedLanguage = 'en';
            this.translateConfigService.setLanguage(selectedLanguage);
          }
        }, {
          text: 'Portugês',
          handler: () => {
            let selectedLanguage = 'br';
            this.translateConfigService.setLanguage(selectedLanguage);
          }
        },
        {
          text: 'Espanol',
          handler: () => {
            let selectedLanguage = 'es';
            this.translateConfigService.setLanguage(selectedLanguage);
          }
        }
      ]
    });

    await alert.present();
  }
}
