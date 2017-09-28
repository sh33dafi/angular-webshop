import {Action} from '@ngrx/store';
import {Article} from '../../model/article';

export const ShoppingCartActionTypes = {
  ADD_ARTICLE_TO_BASKET: 'ADD_ARTICLE_TO_BASKET'
};

export class AddArticleToBasketAction implements Action {
  type: string = ShoppingCartActionTypes.ADD_ARTICLE_TO_BASKET;

  constructor(readonly article: Article) {
  }
}
