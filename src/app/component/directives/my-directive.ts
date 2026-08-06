import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

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
  // @HostBinding('style.backgroundColor') backgroundColor = 'yellow';
  // setColor(color: string) {
  //   // console.log('setColor called with color:', color);
  //   this.backgroundColor = color;
  // }

  /**
   *
   */
  private isLogged: boolean = false;
  constructor(
    private templateref: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input() set appMyDirective(condition: boolean) {
    console.log(condition);
    if (condition && !this.isLogged) {
      this.viewContainer.createEmbeddedView(this.templateref);
      this.isLogged = true;
    } else if (!condition && this.isLogged) {
      this.viewContainer.clear();
      this.isLogged = false;
    }
  }
}
