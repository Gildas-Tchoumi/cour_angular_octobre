import { Service } from '@angular/core';
import { Product } from '../model/produit';
// import { Product } from '../component/static/product-card/product-card';

@Service()
export class ProductService {
  private products: Product[] = [
      {
        id: 1,
        name: 'telephone',
        price: 12000,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        description: 'test test',
        category: {
          id: 'ddsdsdl',
          description: 'description de la categorie electronique',
          name: 'electronique',
        },
      },
      {
        id: 2,
        name: 'souris',
        price: 12000,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        description: 'souris',
        category: {
          id: 'dfskfdk',
          description: 'description de la categorie cosmétique',
          name: 'cosmetique',
        },
      },
      {
        id: 3,
        name: 'clavier',
        price: 12000,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        description: 'clavier',
        category: {
          id: 'fghgri',
          description: 'description de la categorie éducation',
          name: 'education',
        },
      },
      {
        id: 4,
        name: 'Ecran',
        price: 12000,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
        description: 'Ecran',
        category: {
          id: 'firfikg',
          description: 'description de la categorie sport',
          name: 'sport',
        },
      },
      {
        id: 5,
        name: 'Imprimante',
        price: 12000,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
        description: 'Imprimante',
        category: {
          id: 'ddsdsdl',
          description: 'description de la categorie electronique',
          name: 'electronique',
        },
      },
      {
        id: 6,
        name: 'Ecouteur',
        price: 12000,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        description: 'Ecouteur',
        category: {
          id: 'dfskfdk',
          description: 'description de la categorie cosmétique',
          name: 'cosmetique',
        },
      },
    ];


  createProduct(product: Product){
    this.products.push(product);
  }

  updateProduct(product: Product) {
    this.products = this.products.map(item => {
      if(item.id == product.id){
        return product
      }
      return item
    });
  }


  getById(id: number) : Product{
    return this.products.find(item => item.id == id) as Product
  }

  getproducts(): Product[] {
    return this.products
  }
}
