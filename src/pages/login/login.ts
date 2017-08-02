import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook, public afAuth: AngularFireAuth) {

  }

  ionViewDidLoad() {
    this.verificarFB()
  }


  signIn(){
    this.fb.login(['email']).then((response: FacebookLoginResponse)=>{
              let facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken)

              this.afAuth.auth.signInWithCredential(facebookCredential).then((success) => {

                    this.navCtrl.setRoot(TabsPage)
                  })
                  .catch((error) => {
                    console.log("Firebase failure: " + JSON.stringify(error));
                  });

              }).catch((error)=>{
                console.log('error al registarse con facebook: ' + JSON.stringify(error))
              })


  }
  verificarFB(){
    this.fb.getLoginStatus().then((response)=>{
      if(response.status === 'connected'){
        console.log(response.status)
        this.navCtrl.setRoot(TabsPage)
      }else{
        console.log(response.status)
        return
      }

    }).catch((error)=>{console.log('es un error' + error)})
  }
}
