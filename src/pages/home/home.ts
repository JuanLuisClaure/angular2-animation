import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { AuthProvider } from '../../providers/auth/auth'
import { FirebaseProvider } from '../../providers/firebase/firebase'



import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


// currenUser:string;
// facebookToken:any;
// deviceToken:any;
uju:any
  constructor(public navCtrl: NavController, public auth: AuthProvider, public fire: FirebaseProvider) {

      // this.tokenFb()
      // this.facebookToken = this.tokenFb()
      // this.deviceToken  = this.agarrarToken()
      //
      // // console.log(facebookToken, 'this is facebook token')
      // // console.log(DeviceToken, 'this is device token')
      // // console.log(UidFromUser, 'this is uid user')
      //
      // // this.asociarTokenConUid(facebookToken, DeviceToken)
      //
      //
      //
      // Promise.all([this.currenUser, this.deviceToken]).then((res)=>{
      //     this.asociarTokenConUid(res[0], res[1])
      // }).catch((err)=>{console.log(err)})

  }


  ionViewDidLoad() {
    let yes    = this.auth.verificarFB()
    this.uju   = this.auth.logOut()
    let yei   = this.fire.crearUsuario()
  }


boton(){

  this.auth.hacerPromesa(this.uju).then(()=>{

    this.navCtrl.setRoot(LoginPage)

  })
}
















  asociarTokenConUid(uid, device){
    console.log(uid, 'esto es uid')
    console.log(device, 'this is divice')
  }








}
