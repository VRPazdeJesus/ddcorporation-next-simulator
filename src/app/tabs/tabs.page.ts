import { Component } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  // public selectedLanguage:string;
  // public oi:string = "heello mundooo";
 
  constructor(private translateConfigService: TranslateConfigService){
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    // console.log("Anitta");
    
  }
 
  // languageChanged(){
  //   this.translateConfigService.setLanguage(this.selectedLanguage);
  // }
}
