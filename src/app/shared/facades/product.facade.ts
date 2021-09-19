import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { itemSelect, itemsSelect } from 'src/app/store/selectors/product.select';
import { AppState } from 'src/app/store/state/app.state';
import { ItemResponse } from '../responses/item.response';
import { SearchResponse } from '../responses/search.response';
import { BaseFacade } from './base-facade';



@Injectable({
    providedIn: 'root',
  })
export class ProductFacade extends BaseFacade {
    items: Observable<SearchResponse|null>;
    item: Observable<ItemResponse | null>;
    constructor(protected store: Store<AppState>) {
      super(store);
      this.items = this.store.pipe(
        select(itemsSelect)
      );
      this.item = this.store.pipe(
        select(itemSelect)
      );
    }
  }
