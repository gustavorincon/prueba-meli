import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemResponse } from 'src/app/shared/responses/item.response';
import { SearchResponse } from 'src/app/shared/responses/search.response';
import { ProductState } from '../state/product.state';


export const selectFeature = createFeatureSelector<ProductState>('product');

export const itemsSelect = createSelector(
  selectFeature,
  (state: ProductState): SearchResponse | null => state.searchResponse
);

export const itemSelect = createSelector(
    selectFeature,
    (state: ProductState): ItemResponse | null => state.itemResponse
  );
