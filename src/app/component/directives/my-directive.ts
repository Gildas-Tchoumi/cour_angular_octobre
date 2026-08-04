import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirective {
  // private el = inject(ElementRef);
  // private el: ElementRef;

  // @HostListener('click') onClick() {
  //   console.log('click');
  //   this.changeColor();
  // }

  // private changeColor() {
  //   this.el.nativeElement.style.backgroundColor = 'blue';
  // }

  @HostBinding('style.backgroundColor') backgroundColor = 'yellow';

  setColor(color: string) {
    // console.log('setColor called with color:', color);
    this.backgroundColor = color;
  }
}
