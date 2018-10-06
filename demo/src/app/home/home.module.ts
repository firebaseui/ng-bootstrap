import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAuthFirebaseUIModule} from '@firebaseui/ng-bootstrap';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    NgbAuthFirebaseUIModule,
    MarkdownModule.forChild(),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
