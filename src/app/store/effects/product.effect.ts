import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ItemResponse } from 'src/app/shared/responses/item.response';
import { SearchResponse } from 'src/app/shared/responses/search.response';
import { SearchService } from 'src/app/shared/services/search.service';
import * as productActions from '../actions/product.actions';


@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}

  @Effect()
  getItems$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.searchListItems),
    mergeMap(action =>
      this.searchService.searchItems(action.search).pipe(
        map((response: SearchResponse) => {
          return productActions.searchListItemsSuccess({
            searchResponse: response,
          });
        })
      )
    )
  );

  @Effect()
  getItem$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.searchItem),
    mergeMap(action =>
      this.searchService.searchItem(action.idItem).pipe(
        map((response: ItemResponse) => {
          return productActions.searchItemSuccess({
            itemResponse: response,
          });
        })
      )
    )
  );
}
