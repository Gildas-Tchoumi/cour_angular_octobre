export type Name = 'sport' | 'cosmetique' | 'electronique' | 'education'; 

export interface Category {
    id: string,
    name: Name,
    description: string
}