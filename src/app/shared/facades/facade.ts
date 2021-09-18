import { Action } from '@ngrx/store';

export interface Facade {
  // tslint:disable-next-line:typedef
  dispatch(action: Action): any;
}
