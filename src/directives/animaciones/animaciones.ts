import { Directive, ElementRef, Input, Renderer2, HostListener, Output, HostBinding, EventEmitter} from '@angular/core';

/**
 * Generated class for the AnimacionesDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[animaciones]'

   // Attribute selector
})
export class AnimacionesDirective {

  @Input('animaciones')
  @Output() on = new EventEmitter<any>();
  @Output() off = new EventEmitter<any>();


  private backgroundColor = 'red';
  el:any
  next:any
  algo:any
  constructor(public elm : ElementRef, public render2: Renderer2) {

  }

  // @HostBinding('style.backgroundColor') get setColor() {
  //    return this.backgroundColor;
  // };

  @HostListener('t', ['$event']) unaFuncion(event: Event){
    this.algo = event.srcElement.attributes['animaciones']
    this.el = event.target


    new Promise((resolve, reject)=>{

        if(this.algo !== undefined){
          resolve(this.algo.value)
        }

    }).then((success)=>{

          this.next = success


        new Promise((resolve, reject)=>{
          resolve(this.next)
        }).then((success)=>{
          this.casoOnce(this.el, this.next)

        }).catch((err)=>{console.log(err)})

    }).catch((err)=>{console.log('no llego')})

  }


  @HostListener('ts', ['$event'] ) otraFuncion(event: Event){
    // this.quitarClase(event.target, this.animationName)
    console.log(event)
  }



//Other state I have to make as function is when state just get Active for
//

  private casoOnce(el:any, animation:string){

    this.render2.addClass(el, animation);
    setTimeout(()=>{
      this.render2.removeClass(el, animation)
      // aca tendria que decirle al elemento host que cambio de estado
      //  esto se lo mandaria de vuelto al servico para que se pueda volver hacer
      //  hostBinding puede ser una posibilidad para hacer esto
      //  crear un evento tipo observable es otra posiblidad
      console.log(['FIN'])
    },1000)
  }



  private casoEspecific(el:any, animation:string){
    //aca el caso
  }




  private quitarClase(el: any, animation:any){
    this.render2.removeClass(el, animation);
  }

  private añadirClase(el: any, animation:any , time:number){

    setTimeout(()=>{
      this.render2.removeClass(el, animation)
    }, time)
    this.render2.addClass(el, animation)
  }

  // aca hay que hacer para los estilos
  // private anadirEstilo(el: any,){
  //       this.render2.setStyle(el, style: string, value: any, flags?: RendererStyleFlags2): void
  // }




//export interface AnimationEvent {
//     fromState: string;
//     toState: string;
//     totalTime: number;
//     phaseName: string;
//     element: any;
//     triggerName: string;
// }
 }
