import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { AuthProvider } from '../../providers/auth/auth'
import { PushProvider } from '../../providers/push/push'

import { FirebaseProvider } from '../../providers/firebase/firebase'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import firebase from 'firebase';

@Component({
  inputs: ['datosFacebook'],
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input() datosFacebook:any;

  // currenUser:string;
  // facebookToken:any;
  // deviceToken:any;
  uju:any
  yes:any
  datosFb:any;

    photos: Observable<any[]>;

  constructor(public navCtrl: NavController,public navParams:NavParams , public auth: AuthProvider, public fb: FirebaseProvider, public  push: PushProvider) {

    // this.datosFb = new Promise((resolve, reject)=>{resolve())})  // this.tokenFb()
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
    // this.push.agarrarToken().then((response)=>{
    //   console.log(response)
    // })
    this.auth.hacerPromesa(this.auth.quieroElDatoDelLogin()).then((success)=>{
      this.yes = success
      console.log(this.yes.status)
    }).catch((err)=>{console.log(err)})

    this.auth.agarrarAccessToken().then((success)=>{
     this.auth.llamarApi(success).subscribe((data)=>{
       data.map((dataa) => {console.log(dataa);});
     })


      console.log(this.auth.llamarApi(success))
    }).catch((err)=>{console.log(err)})

  // this.uju   = this.auth.logOut()
    // let yei   =


  }




  boton(){

    this.auth.logOut().then((response)=>{
      // this.fb.logOutFacebook()
      this.navCtrl.setRoot(LoginPage)

    })

  }

















  asociarTokenConUid(uid, device){
    console.log(uid, 'esto es uid')
    console.log(device, 'this is divice')
  }








}
