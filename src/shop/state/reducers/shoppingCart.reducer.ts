import {Article} from '../../model/article';
import {Action} from '@ngrx/store';

const INITIAL_STATE: Array<Article> = [];

export function shoppingCartReducer(state: Array<Article> = INITIAL_STATE, action: Action) {
  return state;
}
