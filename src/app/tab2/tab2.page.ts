import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: Observable<any[]>;
  ref: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private toastCtrl: ToastController){

  }

  async updateToast() {
    let toast = await this.toastCtrl.create({
      message: 'Valores atualizados :)',
      duration: 3000
    });
    toast.present();
  }

  async notUpdateToast() {
    let toast = await this.toastCtrl.create({
      message: 'Não foi possível atualizar valores :(',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    
  }

  
}
