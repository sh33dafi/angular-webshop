import {Article} from '../../model/article';
import {Action} from '@ngrx/store';

const INITIAL_STATE: Array<Article> = [];

export function articleReducer(state: Array<Article> = INITIAL_STATE, action: Action) {
  return state;
}
