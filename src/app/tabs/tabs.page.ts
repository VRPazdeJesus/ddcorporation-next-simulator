import { Component } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  // Tradução
  public selectedLanguage:string = 'es';

  constructor(private translateConfigService: TranslateConfigService){
    // this.languageChanged();
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
