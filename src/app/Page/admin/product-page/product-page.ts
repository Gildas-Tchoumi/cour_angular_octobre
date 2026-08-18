import { Component, inject } from '@angular/core';
import {ProductCard } from '../../../component/static/product-card/product-card';
import { ProductService } from '../../../services/product-service';
import { RouterLink } from '@angular/router';
import { Product } from '../../../model/produit';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard, RouterLink],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  public products: Array<Product> = [];
  private productService = inject(ProductService);

  isAdmlin: boolean = true;

  categoryStyle = {
    cosmetique: "hover:border-pink-500 hover:border-2",
    electronique: "hover:border-blue-500 hover:border-2",
    sport: "hover:border-green-500 hover:border-2",
    education: "hover:border-amber-500 hover:border-2",
  }

  ngOnInit(): void {
    this.products = this.productService.getproducts();
  }
}
