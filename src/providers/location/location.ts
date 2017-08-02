import { Injectable, NgZone  } from '@angular/core';
import { Geolocation, Geoposition  } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseObjectObservable  } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocationProvider {
  item:FirebaseObjectObservable<any>;
  public watch: any;

  public lat: number = 0;
  public lng: number = 0;

  constructor(public geolocation: Geolocation, public zone: NgZone, public db: AngularFireDatabase) {
    this.item = db.object('/item' + 'nuevoUsuario')
  }



  correrGps(){

    let options = {
        frequency: 3000,
        enableHighAccuracy: true
      }

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
                    this.zone.run(() => {
                      this.lat = position.coords.latitude;
                      this.lng = position.coords.longitude;
                      this.item.update({
                        lat:position.coords.latitude,
                        lon:position.coords.longitude
                      })
                    });

                  });

  }

  pararGps(){
    this.watch.unsubscribe()
  }
}
