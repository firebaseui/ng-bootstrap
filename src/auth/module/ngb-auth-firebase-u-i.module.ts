import {CommonModule} from '@angular/common';
import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthProcessService} from './services/auth-process.service';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {FirebaseAppConfig, FirebaseNameOrConfigToken, FirebaseOptionsToken} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {defaultAuthFirebaseUIConfig, NgBootstrapAuthFirebaseUIConfig} from './interfaces/config.interface';
import {AuthComponent} from './components/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {AuthProvidersComponent} from './components/providers/auth.providers.component';
import {AlertService} from './services/alert.service';
import {NgbAlertsContainerComponent} from './components/alerts-container/ngb-alerts-container.component';

// Export module's public API
// components
export {AuthComponent} from './components/auth/auth.component';
export {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
export {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
export {AuthProvidersComponent} from './components/providers/auth.providers.component';
export {NgbAlertsContainerComponent} from './components/alerts-container/ngb-alerts-container.component';

// services
export {AuthProcessService, AuthProvider} from './services/auth-process.service';
export {FirestoreSyncService} from './services/firestore-sync.service';
export {AlertService} from './services/alert.service';

// interfaces
export {NgBootstrapAuthFirebaseUIConfig} from './interfaces/config.interface';
export {IAlert} from './interfaces/ialert.interface';

export const NgBootstrapAuthFirebaseUIConfigToken =
  new InjectionToken<NgBootstrapAuthFirebaseUIConfig>('NgBootstrapAuthFirebaseUIConfig');

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports:
    [
      AuthComponent,
      AuthProvidersComponent,
      EmailConfirmationComponent,
      NgbAlertsContainerComponent,
      ProgressBarComponent,
      AngularFireAuthModule,
      AngularFirestoreModule
    ],
  declarations:
    [
      AuthComponent,
      AuthProvidersComponent,
      EmailConfirmationComponent,
      ProgressBarComponent,
      NgbAlertsContainerComponent
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
          FirestoreSyncService,
          AlertService
        ],
    };
  }
}
