import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebugElement, EventEmitter} from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {AngularFirestore} from '@angular/fire/firestore';
import {
  AlertService,
  AuthComponent,
  AuthProcessService,
  AuthProvidersComponent,
  EmailConfirmationComponent,
  FirestoreSyncService, IAlert,
  ProgressBarComponent
} from '../../../..';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbAlertsContainerComponent} from '../alerts-container/ngb-alerts-container.component';

describe('AuthProvidersComponent', function () {
  let de: DebugElement;
  let comp: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  let authProcessServicePartial: Partial<AuthProcessService>;

  authProcessServicePartial = {
    onErrorEmitter: new EventEmitter<any>(),
  };

  const credentialsMock = {
    email: 'abc@123.com',
    password: 'password'
  };

  const userMock = {
    uid: 'ABC123',
    email: credentialsMock.email,
  };

  const fakeAuthState = new BehaviorSubject(null); // <= Pay attention to this guy

  const mockSignInHandler = (email: any, password: any): Promise<any> => {
    fakeAuthState.next(userMock);
    return Promise.resolve(userMock);
  };

  const mockSignOutHandler = (): Promise<any> => {
    fakeAuthState.next(null);
    return Promise.resolve();
  };

  const angularFireAuthStub = {
    authState: fakeAuthState,
    auth: {
      createUserWithEmailAndPassword: jasmine
        .createSpy('createUserWithEmailAndPassword')
        .and
        .callFake(mockSignInHandler),
      signInWithEmailAndPassword: jasmine
        .createSpy('signInWithEmailAndPassword')
        .and
        .callFake(mockSignInHandler),
      signOut: jasmine
        .createSpy('signOut')
        .and
        .callFake(mockSignOutHandler),
    },
  };

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({foo: 'bar'}),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {

    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {matches: true}
      })
    });

    const alertServicePartial: Partial<AlertService> = {
      alerts: [],
      onNewAlert: new EventEmitter<IAlert>(),
    };

    TestBed.configureTestingModule({
      imports:
        [
          HttpClientTestingModule,
          NgbModule.forRoot(),
          FormsModule,
          ReactiveFormsModule
        ],
      declarations:
        [
          AuthComponent,
          AuthProvidersComponent,
          EmailConfirmationComponent,
          ProgressBarComponent,
          NgbAlertsContainerComponent
        ],
      providers: [
        HttpClientTestingModule,
        FirestoreSyncService,
        AngularFireModule,
        {provide: AlertService, useValue: alertServicePartial},
        {provide: AngularFirestore, useValue: FirestoreStub},
        {provide: AngularFireAuth, useValue: angularFireAuthStub},
        {provide: AuthProcessService, useValue: authProcessServicePartial}]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create components', () => expect(comp).toBeDefined());

});
