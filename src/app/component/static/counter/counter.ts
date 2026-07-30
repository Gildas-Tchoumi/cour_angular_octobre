import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  public count: number = 0;

  @Output()
  public countEvent = new EventEmitter<number>();

  public increment = () => {
    this.count += 1;
    this.countEvent.emit(this.count);
  };

  public decrement = () => {
    this.count -= 1;
    this.countEvent.emit(this.count);
  };

  public reset = () => {
    this.count = 0;
    this.countEvent.emit(this.count);
  };
}
