import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
Generated class for the AuthProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  currenUser:any;


  constructor(public http: Http, public fb: Facebook, public afauth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  //TODO
  //decir quien es quien con gaphQl
  tokenFb(){
  let ysea =  this.fb.getAccessToken().then((response)=>{
      return response
    }).catch((error)=>{console.log('error', error)})
    return ysea
  }



  //TODO
  //este es para hacer la coexion a firebase del UcurrentUser UID
  agarraUidFromUser(){
    return firebase.auth().currentUser.uid
  }


  verificarFB(){
    let yes = this.fb.getLoginStatus().then((response)=>{
      if(response.status === 'connected'){
        console.log(response.status)

        // this.navCtrl.setRoot(TabsPage)
      }else{
        console.log(response.status)

      }
    }).catch((error)=>{console.log('es un error' + error)})

    return yes
  }

  signIn(){
    let yes = this.fb.login(['email']).then((response: FacebookLoginResponse)=>{
        return  firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken)
    }).catch((error)=>{
      return               console.log('te falta tu email=', error)

    })
    return yes
  }

  logOut(){
    let ret = this.fb.logout()
    .then((success)=>{
      return   success
    })
    .catch((error)=>{
      console.log('error al log out', error)
    })

    return ret
  }


  hacerPromesa(n){
    let ayuda =  new  Promise((resolve, reject)=>{setTimeout(()=>{resolve(n)},500)}).then((success)=>{
      return success
    }).catch((err)=>{console.log(err)})

    return ayuda
  }





}
