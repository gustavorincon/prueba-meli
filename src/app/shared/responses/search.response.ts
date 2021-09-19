import { Author } from '../models/author.model';
import { Category } from '../models/category.model';
import { Item } from '../models/item.model';

export interface SearchResponse {
    author: Author;
    categories: string[];
    items: Item[];
}
