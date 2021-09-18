import { createAction, props } from '@ngrx/store';
import { ItemResponse } from 'src/app/shared/responses/item.response';
import { SearchResponse } from 'src/app/shared/responses/search.response';


export const searchListItems = createAction(
    '[PRODUCT] consultar lista de items con parametro de busqueda',
    props<{ search: string }>()
  );
export const searchListItemsSuccess = createAction(
    '[PRODUCT] consultar lista de items con parametro de busqueda con exito',
    props<{ searchResponse: SearchResponse }>()
  );

export const searchItem = createAction(
    '[PRODUCT]  consultar item por id',
    props<{ idItem: string }>()
  );

export const searchItemSuccess = createAction(
    '[PRODUCT] consultar item por id con exito',
    props<{ itemResponse: ItemResponse }>()
  );
