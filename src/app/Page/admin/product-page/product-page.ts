import { Component, inject } from '@angular/core';
import { Product, ProductCard } from '../../../component/static/product-card/product-card';
import { ProductService } from '../../../services/product-service';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  public products: Array<Product> = [];
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.products = this.productService.getproduct();
  }
}
