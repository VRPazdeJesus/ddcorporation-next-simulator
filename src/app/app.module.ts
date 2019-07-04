import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

var firebaseConfig = {
  apiKey: "AIzaSyBHicnfka5o4stj9y2lkaTSPyKuEO00doc",
  authDomain: "dd-news-8bc0a.firebaseapp.com",
  databaseURL: "https://dd-news-8bc0a.firebaseio.com",
  projectId: "dd-news-8bc0a",
  storageBucket: "dd-news-8bc0a.appspot.com",
  messagingSenderId: "95036170471",
  appId: "1:95036170471:web:a3c8c172f18f1020"
}

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HttpModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
