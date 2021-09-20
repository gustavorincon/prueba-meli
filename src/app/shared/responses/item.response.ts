import { Author } from '../models/author.model';
import { Item } from '../models/item.model';

export interface ItemResponse {
    author: Author;
    item: Item;
    categories: string[];
}
