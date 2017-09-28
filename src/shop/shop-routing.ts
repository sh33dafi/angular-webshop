import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from './containers/shop/shop.component';
import {ShoppingCartComponent} from './containers/shoppingCart/shoppingCart.component';
import {ArticlesComponent} from './containers/articles/articles.component';

const routes: Routes = [
  {path: '', component: ShopComponent, children: [
    {path: '', component: ArticlesComponent},
    {path: 'cart', component: ShoppingCartComponent}
  ]}
];

export const ShopRoutingModule = RouterModule.forChild(routes);
