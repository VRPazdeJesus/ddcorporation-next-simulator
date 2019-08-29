import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translate: TranslateService) { }

  getDefaultLanguage(){
    let language = this.translate.getBrowserLang();
    // let language = 'br';
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }
}
