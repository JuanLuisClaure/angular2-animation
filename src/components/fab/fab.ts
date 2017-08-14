import { Component } from '@angular/core';
import { Platform  } from 'ionic-angular';
/**
 * Generated class for the FabComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'fab',
  templateUrl: 'fab.html'
})
export class FabComponent {


  x: number = 50;
  y: number = 50;
  startX: number;
  startY: number;

  constructor(public platform: Platform) {

  }

  onPanStart(event: any): void {
    this.startX = this.x
    this.startY = this.y
  }

  onPan(event: any): void {
    this.x = this.startX + event.deltaX;
    this.y = this.startY + event.deltaY;
  }

  ondrop(event:any): void{
    this.x = (event.center.x < this.platform.width()/2 )? 0:this.platform.width() - 51
    this.y =  this.y
  }


}
