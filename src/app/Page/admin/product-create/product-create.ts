import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { ProductService } from '../../../services/product-service';
import { Category } from '../../../model/categorie';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../../model/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate implements OnInit {
  categoryService: CategoryService = inject(CategoryService);
  productService: ProductService = inject(ProductService);
  categories: Category[] = this.categoryService.getCategories();

  readonly router = inject(Router);

  private fg = inject(FormBuilder);

  public productform: FormGroup = this.fg.group({
    name: ['', { validators: [Validators.required, Validators.minLength(4)] }],
    price: [0, { validators: [Validators.required, Validators.min(10)] }],
    description: [''],
    category: [''],
    typesport: [''],
    caracteritiques: [''],
  });
  ngOnInit(): void {
    this.productform.get('category')?.valueChanges.subscribe(() => this.updatefieldsvalidate());
    this.updatefieldsvalidate();
  }

  // name = new FormControl('', [Validators.required]);
  // price = new FormControl(0, [Validators.required, Validators.min(10)]);
  // description = new FormControl('');
  // category = new FormControl('');

  submit(event: Event) {
    event.preventDefault();

    if (this.productform.invalid) {
      this.productform.markAllAsTouched();
      console.log('formulaire invalide');
      return;
    }
    // console.log(this.name.value);
    // console.log(this.price.value);
    // console.log(this.description.value);
    // console.log(this.category.value);
    const product: Product = {
      name: this.productform.get('name')?.value as string,
      id: 0,
      // id: this.productService.getproducts().length,
      price: Number.parseFloat(this.productform.get('price')?.value as any),
      description: this.productform.get('description')?.value as string,
      category: this.categories.find(
        (item) => item.id == this.productform.get('category')?.value,
      ) as Category,
    };

    this.productService.createProduct(product).subscribe((productadd) => {
      this.router.navigate(['/admin/product']);
    });
    // console.log('produit creé !');
  }
  // setName() {
  //   this.name.setValue('bonjour');
  // }

  public updatefieldsvalidate() {
    const category = this.productform.get('category')?.value;
    const typesport = this.productform.get('typesport');
    const caracteritiques = this.productform.get('caracteritiques');

    // console.log('updatefieldsvalidate');

    //reinitialiser les validateurs
    typesport?.clearValidators();
    caracteritiques?.clearValidators();

    // vider les champs
    typesport?.reset();
    caracteritiques?.reset();

    switch (Number(category)) {
      case 1:
        caracteritiques?.setValidators([Validators.required]);
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        typesport?.setValidators([Validators.required]);
        break;
    }

    typesport?.updateValueAndValidity();
    caracteritiques?.updateValueAndValidity();
  }

  get selectdCategory() {
    const categoryId = this.productform.get('category')?.value;
    return this.categories.find((category) => category.id == categoryId);
  }
}
