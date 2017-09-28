
import {NgModule} from '@angular/core';
import {AboutComponent} from './containers/about.component';
import {AboutRoutingModule} from './about-routing';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule
  ],
})
export class AboutModule { }
