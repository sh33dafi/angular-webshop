import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'shopping-articles',
  template: `articles`
})
export class ArticlesComponent {
  constructor(store: Store<any>) {
    store.dispatch({type: 'test2'});
  }
}
