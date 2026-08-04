import { Component, inject, Inject } from '@angular/core';
import { Product, ProductCard } from '../../../component/static/product-card/product-card';
import { Counter } from '../../../component/static/counter/counter';
import { NgClass } from '@angular/common';
// import { AlertDirective } from '../../../component/directives/alert-directive';
import { MyDirective } from '../../../component/directives/my-directive';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, Counter, NgClass, MyDirective],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  // public product: Product = {
  //   id: 1,
  //   name: 'telephone',
  //   price: 12000,
  //   picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  //   description: 'test test',
  // };

  // creer une liste de produits
  public products: Array<Product> = [
    {
      id: 1,
      name: 'telephone',
      price: 12000,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      description: 'test test',
    },
    {
      id: 2,
      name: 'souris',
      price: 12000,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      description: 'souris',
    },
    {
      id: 3,
      name: 'clavier',
      price: 12000,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      description: 'clavier',
    },
    {
      id: 4,
      name: 'Ecran',
      price: 12000,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      description: 'Ecran',
    },
    {
      id: 5,
      name: 'Imprimante',
      price: 12000,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      description: 'Imprimante',
    },
    {
      id: 6,
      name: 'Ecouteur',
      price: 12000,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      description: 'Ecouteur',
    },
  ];
  public countnumb: number = 0;

  public ListenerCountEvent(valeur: number) {
    this.countnumb = valeur;
  }

  isActive: boolean = false;
  public tests: string = 'text-3xl bg-red-500 text-white';

  public mydirective = new MyDirective();
}
