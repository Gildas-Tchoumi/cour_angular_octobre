import { inject, Service } from '@angular/core';
import { Product, products } from '../model/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Product } from '../component/static/product-card/product-card';

@Service()
export class ProductService {
  // url de base
  private readonly apiurl = 'http://localhost:3000/products';

  //injecter le client http
  readonly #http = inject(HttpClient);

  // private products: Product[] = [];

  getproductlist(): Observable<products> {
    return this.#http.get<products>(this.apiurl);
  }

  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return this.#http.post<Product>(this.apiurl, product);
  }

  // updateProduct(product: Product) {
  //   this.products = this.products.map((item) => {
  //     if (item.id == product.id) {
  //       return product;
  //     }
  //     return item;
  //   });
  // }

  // getById(id: number): Product {
  //   return this.products.find((item) => item.id == id) as Product;
  // }

  // getproducts(): Product[] {
  //   return this.products;
  // }
}
