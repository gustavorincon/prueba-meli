
import { ItemResponse } from 'src/app/shared/responses/item.response';
import { SearchResponse } from 'src/app/shared/responses/search.response';

export interface ProductState {
    searchResponse: SearchResponse | null;
    itemResponse: ItemResponse | null;
}

export const productInitialState: ProductState = {
    searchResponse: null,
    itemResponse: null
};
