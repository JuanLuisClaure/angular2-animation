import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthProvider } from '../../providers/auth/auth'
import { PushProvider } from '../../providers/push/push'
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  firestore  = firebase.database().ref('/pushtokens');
  firemsg    = firebase.database().ref('/messages');
  fireOrders = firebase.database().ref('/orders');
  userUi:any


  constructor(public http: Http, public auth: AuthProvider, public push: PushProvider, public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider' );
  }


crearUsuario(){


let euas = this.auth.agarraUidFromUser()
console.log(euas)
if(euas === null){
  console.log('es null')
}else{


Promise.all([this.push.agarrarToken(), this.auth.agarraUidFromUser()]).then((success)=>{
    this.afDB.list(this.firestore).push({
      uid:success[1],
      devtoken: success[0]
    }).then(() => {
      alert('asociacion exitosa de usuario y token');
    }).catch(() => {
      alert('asociacion no exitosa');
    })
  }).catch((err)=>{console.log('error',err)})



}


}


}
