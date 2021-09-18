import { productInitialState, ProductState } from './product.state';


export interface AppState {
    product: ProductState;
  }

export const appInitialState: AppState = {
    product: productInitialState,
  };

export function getInitialState(): AppState {
    return appInitialState;
}
