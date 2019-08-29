import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  public selectedLanguage:string = 'es';

  constructor(private translate: TranslateService) { }

  getDefaultLanguage(){
    // let language = this.translate.getBrowserLang();
    // let language = 'br';
    this.translate.setDefaultLang(this.selectedLanguage);
    return this.selectedLanguage;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }
}
