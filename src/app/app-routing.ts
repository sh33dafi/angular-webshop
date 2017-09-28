import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'shop'},
  {path: 'shop', loadChildren: 'shop/shop.module#ShopModule'},
  {path: 'about', loadChildren: 'about/about.module#AboutModule'}
];

export const AppRoutingModule = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});
