import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './containers/about.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
];

export const AboutRoutingModule = RouterModule.forChild(routes);
