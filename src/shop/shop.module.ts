import {NgModule} from '@angular/core';
import {ShopComponent} from './containers/shop/shop.component';
import {ShopRoutingModule} from './shop-routing';
import {ShoppingCartComponent} from './containers/shoppingCart/shoppingCart.component';
import {ArticlesComponent} from './containers/articles/articles.component';
import {StoreModule} from '@ngrx/store';
import {articleReducer} from './state/reducers/articles.reducer';
import {shoppingCartReducer} from './state/reducers/shoppingCart.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    ShopComponent,
    ShoppingCartComponent,
    ArticlesComponent
  ],
  imports: [
    ShopRoutingModule,
    StoreModule.forFeature('shop', {
      articles: articleReducer,
      shoppingCart: shoppingCartReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ]
})
export class ShopModule {

}
