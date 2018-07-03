import {CommonModule} from '@angular/common';
import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthProcessService} from './services/auth-process.service';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {FirebaseAppConfig, FirebaseNameOrConfigToken, FirebaseOptionsToken} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {defaultAuthFirebaseUIConfig, NgBootstrapAuthFirebaseUIConfig} from './interfaces/config.interface';
import {AuthComponent} from './components/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';

// Export module's public API
// components
export {AuthComponent} from './components/auth/auth.component';
export {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
export {ProgressBarComponent} from './components/progress-bar/progress-bar.component';

// services
export {AuthProcessService, AuthProvider} from './services/auth-process.service';
export {FirestoreSyncService} from './services/firestore-sync.service';

// interfaces
export {NgBootstrapAuthFirebaseUIConfig} from './interfaces/config.interface';

export const NgBootstrapAuthFirebaseUIConfigToken = new InjectionToken<NgBootstrapAuthFirebaseUIConfig>('NgBootstrapAuthFirebaseUIConfig');

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports:
    [
      AuthComponent,
      EmailConfirmationComponent,
      ProgressBarComponent,
      AngularFireAuthModule,
      AngularFirestoreModule
    ],
  declarations:
    [
      AuthComponent,
      EmailConfirmationComponent,
      ProgressBarComponent
    ]
})
export class NgbAuthFirebaseUIModule {
  static forRoot(configFactory: FirebaseAppConfig,
                 appNameFactory?: () => string,
                 config: NgBootstrapAuthFirebaseUIConfig = defaultAuthFirebaseUIConfig): ModuleWithProviders {
    return {
      ngModule: NgbAuthFirebaseUIModule,
      providers:
        [
          {
            provide: FirebaseOptionsToken,
            useValue: configFactory
          },
          {
            provide: FirebaseNameOrConfigToken,
            useFactory: appNameFactory
          },
          {
            provide: NgBootstrapAuthFirebaseUIConfigToken,
            useValue: config
          },
          AuthProcessService,
          FirestoreSyncService
        ],
    };
  }
}
