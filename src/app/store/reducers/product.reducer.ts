import { Action, createReducer, on } from '@ngrx/store';
import { productInitialState, ProductState } from '../state/product.state';
import * as productActions from '../actions/product.actions';
import produce from 'immer';



const reducer = createReducer(
    productInitialState,
    on(
        productActions.searchListItemsSuccess,
      (state, { searchResponse }) => ({
        ...state,
        searchResponse,
      })
    ),
    on(
        productActions.searchItemSuccess,
      (state, { itemResponse }) => ({
        ...state,
        itemResponse,
      })
    ),
  );

export function productReducer(
    state = productInitialState,
    action: Action
  ): ProductState {
    return produce((draft: ProductState, formAction: Action) => {
      return reducer(draft, formAction);
    }, productInitialState)(state, action);
  }
