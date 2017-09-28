import {Article} from '../../model/article';

export interface ShopState {
  articles: Array<Article>;
  shoppingCart: Array<Article>;
}
