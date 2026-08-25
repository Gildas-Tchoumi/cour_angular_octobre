import { Component, inject, Inject, OnInit } from '@angular/core';
import { ProductCard } from '../../../component/static/product-card/product-card';
import { Counter } from '../../../component/static/counter/counter';
import { NgClass } from '@angular/common';
// import { AlertDirective } from '../../../component/directives/alert-directive';
import { MyDirective } from '../../../component/directives/my-directive';
import { AlertDirective } from '../../../component/directives/alert-directive';
import { ProductService } from '../../../services/product-service';
import { Product } from '../../../model/produit';
import { readonly } from '@angular/forms/signals';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, Counter, NgClass, MyDirective],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  // public product: Product = {
  //   id: 1,
  //   name: 'telephone',
  //   price: 12000,
  //   picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  //   description: 'test test',
  // };
  public isAdmin: boolean = false;

  // creer une liste de produits
  private productService = inject(ProductService);
  // public products: Array<Product> = this.productService.getproduct();
  // public products: Array<Product> = [];

  readonly products = toSignal(this.productService.getproductlist(), { initialValue: [] });
  ngOnInit(): void {}
  // constructor(private productService: ProductService) {
  //   this.products = this.productService.getproduct();
  // }

  public countnumb: number = 0;

  public ListenerCountEvent(valeur: number) {
    this.countnumb = valeur;
  }

  isActive: boolean = false;
  public tests: string = 'text-3xl bg-red-500 text-white';

  // public mydirective = new MyDirective();
}
