import { Component, computed, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage implements OnInit {
  count = signal<number>(4);

  public counterdouble = computed<number>(() => {
    return this.count() * 2;
  });

  public increment = () => {
    this.count.update((prev) => prev + 1);
  };

  public decrement = () => {
    this.count.update((prev) => prev - 1);
  };

  //creation d'une Observable
  monobservable$ = new Observable((observer) => {
    //apres 1 seconde
    setTimeout(() => {
      observer.next(1);
    }, 1000);

    //apres 2 seconde
    setTimeout(() => {
      observer.next(2);
    }, 2000);

    //apres 3 seconde
    setTimeout(() => {
      observer.next('hello world');
    }, 3000);

    //apres 2 seconde
    setTimeout(() => {
      observer.complete();
    }, 3000);
  });

  ngOnInit(): void {
    this.monobservable$.subscribe({
      //Recoit les valeurs
      next: (value) => {
        console.log(value);
      },
      //recoit les erreurs
      error: (error) => {
        console.log(error);
      },

      //observable termine
      // complet: () => {
      //   console.log('Fin');
      // }
    });
  }
}
