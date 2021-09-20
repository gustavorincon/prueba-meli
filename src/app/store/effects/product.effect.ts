import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, from, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ItemResponse } from 'src/app/shared/responses/item.response';
import { SearchResponse } from 'src/app/shared/responses/search.response';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { SearchService } from 'src/app/shared/services/search.service';
import * as productActions from '../actions/product.actions';


@Injectable()
export class ProductEffect {

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  @Effect()
  getItems$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.searchListItems),
    mergeMap(action => {
     this.loadingService.show();
     return from(
      this.searchService.searchItems(this.removeAccents(action.search)).pipe(
        map((response: SearchResponse) => {
          this.loadingService.hide();
          return productActions.searchListItemsSuccess({
            searchResponse: response,
          });
        }),
        catchError(error => {
          this.loadingService.hide();
          return EMPTY;
        })
      )
      );
      })
  );

  @Effect()
  getItem$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.searchItem),
    mergeMap(action => {
      this.loadingService.show();
      return from(
      this.searchService.searchItem(action.idItem).pipe(
        map((response: ItemResponse) => {
          this.loadingService.hide();
          return productActions.searchItemSuccess({
            itemResponse: response,
          });
        }),
        catchError(error => {
          this.loadingService.hide();
          this.router.navigate(['/404']);
          return EMPTY;
        })
      )
      );
    })
  );




    // tslint:disable-next-line:typedef
    removeAccents( str: string ) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
}

