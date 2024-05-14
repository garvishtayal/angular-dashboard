import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueEL]',
  standalone: true
})
export class BlueELDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="blue"
   }

}
