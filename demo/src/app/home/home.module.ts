import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAuthFirebaseUIModule} from '@firebaseui/ng-bootstrap';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    NgbAuthFirebaseUIModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
