import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { ProductService } from '../../../services/product-service';
import { Category } from '../../../model/categorie';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit {

  private route = inject(ActivatedRoute);
  id = Number(this.route.snapshot.paramMap.get("id"))
  categoryService: CategoryService = inject(CategoryService)
  productService: ProductService = inject(ProductService)
  categories: Category[] = this.categoryService.getCategories()
  oldProduct = this.productService.getById(this.id)

  name = new FormControl(this.oldProduct.name, [Validators.required])
  price = new FormControl(this.oldProduct.price, [Validators.required, Validators.min(10)])
  description = new FormControl(this.oldProduct.description)
  category = new FormControl(this.oldProduct.category.id)

  submit(event: Event) {
    event.preventDefault()
    console.log(this.id)
    console.log(this.name.value)
    console.log(this.price.value)
    console.log(this.description.value)
    console.log(this.category.value)
    // const product: Product = {
    //   name: this.name.value as string,
    //   id: this.productService.getproducts().length,
    //   price: Number.parseFloat(this.price.value as any),
    //   description: this.description.value as string,
    //   category: this.categories.find(item => item.id == this.category.value) as Category
    // }

    this.productService.updateProduct({
      name: this.name.value as string,
      id: this.id,
      picture: this.oldProduct.picture,
      price: Number.parseFloat(this.price.value as any),
      description: this.description.value as string,
      category: this.categories.find(item => item.id == this.category.value) as Category
    })

    // this.productService.createProduct()
    console.log("produit creé !")
  }
  setName(){
    this.name.setValue("bonjour")
  }
}
