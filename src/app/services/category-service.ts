import { Service } from '@angular/core';
import { Category } from '../model/categorie';

@Service()
export class CategoryService {
    categories: Category[] =  [
            {
                id: "ddsdsdl",
                description: "description de la categorie électronique",
                name: "electronique"
            },
            {
                id: "dfskfdk",
                description: "description de la categorie cosmétique",
                name: "cosmetique"
            },
            {
                id: "fghgri",
                description: "description de la categorie éducation",
                name: "education"
            },
            {
                id: "firfikg",
                description: "description de la categorie sport",
                name: "sport"
            },
        ]
    getCategories(): Category[] {

        return this.categories
    }
    getById(id: string): Category | undefined {
        return this.categories.find(item => item.id == id)
    }
}
