import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fb: Facebook, public afauth: AngularFireAuth) {
    this.tokenFb()
  }

  tokenFb(){
    this.fb.getAccessToken().then((response)=>{
      console.log(response)
    }).catch((error)=>{console.log('error', error)})
  }
  logOut(){
    this.fb.logout()
    .then((success)=>{
      this.navCtrl.setRoot(LoginPage)
      console.log('log out with success', success)
    })
    .catch((error)=>{
      console.log('error al log out', error)
    })
  }
}
