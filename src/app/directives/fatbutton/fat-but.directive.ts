import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFatBut]'
})
export class FatButDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click')
  animateButton(){
    this.element.nativeElement.style.transform = 'scale(5)'
  }

}
