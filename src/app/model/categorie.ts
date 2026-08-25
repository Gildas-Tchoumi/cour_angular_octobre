export type Name = 'sport' | 'cosmetique' | 'electronique' | 'education';

export interface Category {
  id: number;
  name: Name;
  description: string;
}
