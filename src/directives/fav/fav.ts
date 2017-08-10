import { Directive, Input, EventEmitter, ElementRef, Renderer, Renderer2, HostListener, Output } from '@angular/core';
import { DomController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
/**
 * Generated class for the FavDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[fav]' // Attribute selector
})
export class FavDirective {

startY = 0
startX = 0

  @Output() locationChange = new EventEmitter<any>();

  constructor(public element: ElementRef, public renderer: Renderer2, public domCtrl: DomController) {

  }
  // @HostListener('panstart', ['$event']) onPanStart(event) {
  //   event.preventDefault();
  //   this.startX = this.x;
  //   this.startY = this.y;
  // }

  // @HostListener('panmove', ['$event']) onPanMove(event) {
  //     event.preventDefault();
  //   // this.domCtrl.write(() => {
  //   //     this.renderer.setStyle(this.element.nativeElement, 'left', this.x + 'px');
  //   //     this.renderer.setStyle(this.element.nativeElement, 'top', this.y + 'px');
  //   // });
  //   this.locationChange.emit({x: this.x, y: this.y});
  // }

  ngAfterViewInit() {

//
//        this.renderer.setStyle(this.element.nativeElement, 'left', this.x + 'px');
//        this.renderer.setStyle(this.element.nativeElement, 'top', this.y + 'px');
// // //
//        let hammer = new window['Hammer'](this.element.nativeElement);
//        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
// // // console.log()
//        hammer.on('pan', (ev) => {
//   //        console.log(ev)
//   // this.handlePan(ev);
//        });





   }


   //
  //  handlePan(ev){
  //
  //     this. ev.center.x;
  //      let newTop = ev.center.y;
  //
  //
  //
  //  }

}
