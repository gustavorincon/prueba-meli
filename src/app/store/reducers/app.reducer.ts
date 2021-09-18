import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { productReducer } from './product.reducer';


export const reducers: ActionReducerMap<AppState> = {
    product: productReducer
};
