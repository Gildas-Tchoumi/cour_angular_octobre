import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { ProductService } from '../../../services/product-service';
import { Category } from '../../../model/categorie';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../model/produit';

@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {


  categoryService: CategoryService = inject(CategoryService)
  productService: ProductService = inject(ProductService)
  categories: Category[] = this.categoryService.getCategories()

  name = new FormControl('', [Validators.required])
  price = new FormControl(0, [Validators.required, Validators.min(10)])
  description = new FormControl('')
  category = new FormControl('')

  submit(event: Event) {
    event.preventDefault()
    console.log(this.name.value)
    console.log(this.price.value)
    console.log(this.description.value)
    console.log(this.category.value)
    const product: Product = {
      name: this.name.value as string,
      id: this.productService.getproducts().length,
      price: Number.parseFloat(this.price.value as any),
      description: this.description.value as string,
      category: this.categories.find(item => item.id == this.category.value) as Category
    }

    this.productService.createProduct(product)
    console.log("produit creé !")
  }
  setName(){
    this.name.setValue("bonjour")
  }
}
