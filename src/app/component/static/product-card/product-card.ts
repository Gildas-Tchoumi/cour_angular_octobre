import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';

export interface Product {
  id: number;
  name: string;
  price: number;
  picture?: string;
  description?: string;
}
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input({required: true})
  public prod!: Product;
}
