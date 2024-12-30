import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[setCss]',
})
export class setCss {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = ' rgb(138, 138, 138)';
    console.log(element.nativeElement.style)
    element.nativeElement.style.color = 'white';
    // element.nativeElement.style.color = 'white';
  }
}
