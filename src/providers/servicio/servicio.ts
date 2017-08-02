
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Options } from './intereface'
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServicioProvider {


  // private newArray = []
  opts:any;
  render:any;


  constructor(public http: Http) {

  }



  unaFuncionParaTodos(el:any, animationName:string, transitionTime:number, servicio:any){
    // aca pone los objetos de option en un arrayOpts
    // luego asignar a cada llave un valor
    // hacer el map y agregar a cada vector su correspondiente
    //
    // this.newArray = Object.keys()
    //
    // this.options.idElm = el
    this.render = servicio
    let opts : Options = {
      idElm: el,
      aniNm: animationName,
      trnTm: transitionTime
    }
    new Promise((resolve, reject)=>{
      resolve(this.render)
    }).then((success)=>{
      if(opts.idElm != undefined){

        this.render.setAttribute(opts.idElm, 'animaciones', opts.aniNm, null)
        opts.idElm.dispatchEvent(new CustomEvent('t'))


      }else{
        console.log('error')
      }
    }).catch((err)=>{console.log(err)})

  }



    hacerEsto(e){

      console.log(e)
    }

}
