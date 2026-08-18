import { Category } from "./categorie";


export interface Product {
  id: number;
  name: string;
  price: number;
  picture?: string;
  description?: string;
  categoryName?: string,
  category: Category
}