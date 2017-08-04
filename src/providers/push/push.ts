import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FCM } from '@ionic-native/fcm';
import 'rxjs/add/operator/map';

/*
  Generated class for the PushProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PushProvider {

  constructor(public http: Http, public fcm: FCM) {
    console.log('Hello PushProvider Provider');
  }

  agarrarToken(){
    let creo = this.fcm.getToken().then((token)=>{
      return token
    }).catch((err)=>{console.log(err)});

    return creo
  }


  guardarMensajeDelPush(evento: string, msg: string){

      // this.afDB.list(this.firemsg).push({
      //   senderName: evento,
      //   message: msg
      // })

  }

}
