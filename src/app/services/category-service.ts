import { Service } from '@angular/core';
import { Category } from '../model/categorie';

@Service()
export class CategoryService {
  categories: Category[] = [
    {
      id: 1,
      description: 'description de la categorie électronique',
      name: 'electronique',
    },
    {
      id: 2,
      description: 'description de la categorie cosmétique',
      name: 'cosmetique',
    },
    {
      id: 3,
      description: 'description de la categorie éducation',
      name: 'education',
    },
    {
      id: 4,
      description: 'description de la categorie sport',
      name: 'sport',
    },
  ];
  getCategories(): Category[] {
    return this.categories;
  }
  getById(id: number): Category | undefined {
    return this.categories.find((item) => item.id == id);
  }
}
