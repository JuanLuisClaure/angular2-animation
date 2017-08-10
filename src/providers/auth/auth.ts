import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Observable } from 'rxjs/Rx';
/*
Generated class for the AuthProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
  auth:any

  constructor(public http: Http, public fb: Facebook, public afauth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');

    this.auth = this.afauth


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
    return   this.auth
  }


  verificarFB(){
    let yes = this.fb.getLoginStatus().then((response)=>{
      if(response.status === 'connected'){
        console.log(response.status)
      }else{
        console.log(response.status)

      }
    }).catch((error)=>{console.log('es un error' + error)})

    return yes
  }

  signIn():Promise<FacebookLoginResponse>{
    let yes = this.fb.login(['email'])
    return yes
  }

  logOut(): Promise<any>{
    let ret = this.fb.logout()

    console.log('logOut')
    return ret
  }

  quieroElDatoDelLogin(){
    let fblogin = this.fb.getLoginStatus()
    return fblogin
  }
  agarrarAccessToken(){

    let getA =  this.fb.getAccessToken()
    return getA
  }

  llamarApi(token): Observable<any[]> {
    let ley = token

  let graphUrl = 'https://graph.facebook.com/';
  let graphQuery = `endpoint?key=${ley}&amp;access_token=app_id|app_secret`;

  let url = graphUrl + 'unplash' + graphQuery;

      return this.http
          .get(url)
          .map(response => response.json().posts.data);
  }

  hacerPromesa(n){
    let ayuda =  new  Promise((resolve, reject)=>{setTimeout(()=>{resolve(n)},500)}).then((success)=>{
      return success
    }).catch((err)=>{console.log(err)})

    return ayuda
  }





}
