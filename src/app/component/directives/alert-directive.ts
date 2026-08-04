import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAlertDirective]',
})
export class AlertDirective {
  @Input('appAlertDirective') text = '';

  @HostListener('click', ['$event'])
  run(event: Event) {
    alert(this.text);
  }
}
