import { Component, EventEmitter, Output, Input, Renderer2 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgIf } from '@angular/common';
import { ServicioProvider } from '../../providers/servicio/servicio'
/**
 * Generated class for the ComponentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'componente',
  templateUrl: 'componente.html',
})
export class ComponentePage {

  @Input()  count:number;
  @Output() ser = new EventEmitter<any>();
  p:any;
  yes:any;
  stado:boolean = true

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: ServicioProvider,public render2: Renderer2) {
  }


  ngAfterViewInit(){
    this.p = document.getElementById('tagP')
  }

  reset(){

       this.servicio.unaFuncionParaTodos(this.p,'trackingincontractbckbottom',15, this.render2)
       this.count++
       this.ser.emit(this.count)


// let subscription = this.ser.subscribe(generator);
      //  console.log(this.ser)
      //TODO
      //queremos mandar un estado como observable con el nombre de la animaciones
      //Este estado seria de inactive <-> active porque es causa de alguna accion

  }


  // otraFuncionGenial(id:any, a:any){
  //
  //
  //   this.count++
  //
  //     this.render2.setAttribute(id, 'animaciones', a, null)
  //     this.ser.emit(this.count)
  //
  //
  // }




}
