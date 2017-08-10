import {
Component,
ViewChild,
trigger,
state,
style,
transition,
animate,
keyframes,
ChangeDetectorRef,
NgZone,
Renderer2 } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentePage } from '../componente/componente'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',

  animations: [
    trigger('animationPruebaCorazon', [
      transition('inactive => active', animate('0.2s 0.1s ease-out', keyframes([
        style({transform: 'scale(1)', transformOrigin:'center center', animationTimingFunction:'ease-out', offset: 0}),
        style({transform: 'scale(0.91)', animationTimingFunction:'ease-in', offset: .10}),
        style({transform: 'scale(0.98)', animationTimingFunction:'ease-out', offset: .17}),
        style({transform: 'scale(0.87)', animationTimingFunction:'ease-in', offset: .33}),
        style({transform: 'scale(1)', animationTimingFunction:'ease-out', offset: .45}),
      ]))),
    ]),
    trigger('animationPrueba', [
      transition('inactive => active', animate(1000, keyframes([
        style({transform: 'translateY(45px)', animationTimingFunction:'ease-in', opacity: 1, offset: 0}),
        style({opacity: 1, offset: .24}),
        style({transform: 'translateY(0px)', animationTimingFunction:'ease-out', offset: .25}),
        style({transform: 'translateY(24px)', animationTimingFunction:'ease-in',  offset: .40}),
        style({transform: 'translateY(0px)', animationTimingFunction:'ease-out', offset: .55}),
        style({transform: 'translateY(12px)', animationTimingFunction:'ease-in', offset: .65}),
        style({transform: 'translateY(0px)', animationTimingFunction:'ease-out', offset: .75}),
        style({transform: 'translateY(6px)', animationTimingFunction:'ease-in', offset: .82}),
        style({transform: 'translateY(0px)', animationTimingFunction:'ease-out', offset: .87}),
        style({transform: 'translateY(4px)', animationTimingFunction:'ease-in', offset: .93}),
        style({transform: 'translateY(0px)', animationTimingFunction:'ease-out', opacity: 1, offset: 1}),


      ]))),
    ]),
    trigger('animationPruebaDos', [
      transition('inactive <=> active', animate(500, keyframes([
        style({transform: 'rotate3d(1, 1, 0, -80deg)', opacity: 0, offset: 0}),
        style({transform: 'rotate3d(1, 1, 0, 0deg)', opacity: 1, offset: 1}),
      ]))),
    ]),
    trigger('animationPrecio', [
      transition('inactive <=> active', animate('0.5s ease-in-out', keyframes([
        style({transform: 'rotateX(360deg)', offset: 0}),
        style({transform: 'rotateX(0deg)', offset: 1}),
      ]))),
    ]),
  ]
})
export class ContactPage {
    // private options: { [id: string ]: DataModel };

   vara:any;
   num:number = 0;
   unico:any
   anima:string = 'vacio'

  constructor(public navCtrl: NavController, public zone: NgZone, public render2: Renderer2 ) {



    // if(this.options.id == null){
    //   console.log('this is happy' )
    //   this.arrayOpts[0].push()
    // }else{
    //   this.arrayOpts.push(res)
    //
    // }



        // this.arrayOpts[2].push(<HTMLInputElement>document.getElementById('loginInput'))
        // this.arrayOpts[3].push(<HTMLInputElement>document.getElementById('loginInput'))
        //



    // this.options.traTm = this.arrayOpts[3]
    // this.options.state = this.arrayOpts[1]
    // this.options.aniNm = this.arrayOpts[2]
    // this.options.id= this.arrayOpts[0]




  }

  ngAfterViewInit(){
      this.vara = document.getElementById('loginInput')
  }



  triggerAnimation(){
    console.log('[ OPTIONS NAME ]')
      //TODO
      //queremos mandar unestado como observable con el nombre de la animaciones
      // este estado seria mount -> inactive por que solo se realiza una vez
      //cada estado que mando tiene su propiedades de css,
      //options = { }




       //
      //  this.servicio.unaFuncionParaTodos(this.vara, this.anima, 15, this.render2)

       //
      //  console.log(elvalor.idElm)
      //  if(elvalor.idElm != undefined){
       //
       //
      //   this.something(elvalor.idElm, elvalor.aniNm)
       //
      //  }else{
      //    console.log('error')
      //  }

      //una funcion con estos parametros
      // elemto que queremos activar : el
      // crear un estado como observable
      // son estados distintos
      // this.shouldAnimate = !this.shouldAnimate
  }



    // something(id:any, a:any){
    //
    //
    //       //
    //       // this.render2.setAttribute(id, 'animaciones', a, null)
    //
    // }

      otherSomething(result){
        this.num = result
      // console.log(result)
      // this.servicio.unaFuncionParaTodos(this.unico,'focusinexpandfwd',15)
      }



}
