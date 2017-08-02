import { Component } from '@angular/core';
import { LocationProvider } from '../../providers/location/location';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { BackgroundMode } from '@ionic-native/background-mode';


import 'rxjs/add/operator/filter';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  constructor(
      public navCtrl: NavController,
      public db: AngularFireDatabase,
      public location: LocationProvider,
      public backgroundMode: BackgroundMode){

        let opts = {
          title:'estamos utiliando tu gps',
          text:'para que el cliente vea donde esta su pedido',
          // icon:,
          color:'#d32222',
          resume:true,
          hidden:true,
          bigText:true,
          ticker:'oye tu',
          silent:false,
        }
        this.backgroundMode.enable()
        this.backgroundMode.configure(opts)

        this.backgroundMode.on('deactivate').subscribe((e)=>{
          if(this.backgroundMode.isEnabled()){
            this.location.correrGps()
          }
        })

  }






}
