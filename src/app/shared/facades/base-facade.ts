import { Action, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { Facade } from './facade';


export class BaseFacade implements Facade {
  constructor(protected store: Store<AppState>) {}
  // tslint:disable-next-line:typedef
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
