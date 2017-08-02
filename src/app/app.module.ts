import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundMode } from '@ionic-native/background-mode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentePage } from '../pages/componente/componente';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationProvider } from '../providers/location/location';
import { AnimacionesDirective } from '../directives/animaciones/animaciones';
import { ServicioProvider } from '../providers/servicio/servicio';

var config = {
  apiKey: "AIzaSyDZ-LYMYYh9Rz4rtLg5EXjv-o3H2TR98T0",
  authDomain: "realworld-29cc0.firebaseapp.com",
  databaseURL: "https://realworld-29cc0.firebaseio.com",
  projectId: "realworld-29cc0",
  storageBucket: "realworld-29cc0.appspot.com",
  messagingSenderId: "583280310625"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AnimacionesDirective,
    ComponentePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ComponentePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    BackgroundMode,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationProvider,
    ServicioProvider,
    ServicioProvider
  ]
})
export class AppModule {}
