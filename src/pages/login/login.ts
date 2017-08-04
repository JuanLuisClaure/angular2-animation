import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth'

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
  aja:any
  puyol:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {

  }

  ionViewDidLoad() {
    let yes    = this.auth.verificarFB()
    this.aja   = this.auth.signIn()
  }


cacheando(){
  this.auth.hacerPromesa(this.aja).then(()=>{

    this.navCtrl.setRoot(TabsPage)
  })
}





}
