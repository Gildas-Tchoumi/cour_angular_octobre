import { Service } from '@angular/core';
import { Product } from '../component/static/product-card/product-card';

@Service()
export class ProductService {

    getproduct(): Product[] {
        return [
          {
            id: 1,
            name: 'telephone',
            price: 12000,
            picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            description: 'test test',
          },
          {
            id: 2,
            name: 'souris',
            price: 12000,
            picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
            description: 'souris',
          },
          {
            id: 3,
            name: 'clavier',
            price: 12000,
            picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
            description: 'clavier',
          },
          {
            id: 4,
            name: 'Ecran',
            price: 12000,
            picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
            description: 'Ecran',
          },
          {
            id: 5,
            name: 'Imprimante',
            price: 12000,
            picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
            description: 'Imprimante',
          },
          {
            id: 6,
            name: 'Ecouteur',
            price: 12000,
            picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
            description: 'Ecouteur',
          },
        ];
    }
}
