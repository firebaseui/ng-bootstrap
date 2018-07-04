import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    MarkdownModule
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule {
}
