import { Component, input, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { RouterLink } from "@angular/router";
import { Product } from '../../../model/produit';

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   picture?: string;
//   description?: string;
// }
@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input({required: true})
  public prod!: Product;

  public isAdmin = input.required<boolean>()

  
}
