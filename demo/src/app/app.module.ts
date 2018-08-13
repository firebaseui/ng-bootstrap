import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common';

import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AppComponent} from './app.component';
import {NgbAuthFirebaseUIModule} from '@firebaseui/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'ng-bootstrap-auth-firebaseui-demo-id'}),
    NgbAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyCbLZb4c4g8skCN7li92bG2Wfjw8O4YJoA',
      authDomain: 'ng-bootstrap-auth-firebaseui.firebaseapp.com',
      databaseURL: 'https://ng-bootstrap-auth-firebaseui.firebaseio.com',
      projectId: 'ng-bootstrap-auth-firebaseui',
      storageBucket: 'ng-bootstrap-auth-firebaseui.appspot.com',
      messagingSenderId: '556721943788'
    }),
    MarkdownModule.forRoot(),
    TransferHttpCacheModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
