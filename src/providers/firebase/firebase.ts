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
  // userUi:any
  euas:any
  weareone:any


  constructor(public http: Http, public auth: AuthProvider, public push: PushProvider, public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider' );
  }

loginFacebook(response){


  const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken)

  let thiss = firebase.auth().signInWithCredential(facebookCredential)

  return thiss
}
// logOutFacebook(): promise<any>{
//   firebase.auth.Auth.signOut()
// }
crearUsuario(){

}


}
