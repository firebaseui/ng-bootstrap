import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, EventEmitter} from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {AngularFirestore} from 'angularfire2/firestore';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthComponent, AuthProcessService, FirestoreSyncService} from '../../../..';
import {NgBootstrapAuthFirebaseUIConfigToken} from '../../ngb-auth-firebase-u-i.module';
import {defaultAuthFirebaseUIConfig} from '../../interfaces/config.interface';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('AuthProvidersComponent', function () {
  let de: DebugElement;
  let comp: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  let authProcessServicePartial: Partial<AuthProcessService>;

  authProcessServicePartial = {
    onErrorEmitter: new EventEmitter<any>()
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

    TestBed.configureTestingModule({
      imports:
        [
          HttpClientTestingModule,
          NgbModule.forRoot(),
          FormsModule,
          ReactiveFormsModule
        ],
      declarations: [AuthComponent],
      providers: [
        HttpClientTestingModule,
        FirestoreSyncService,
        AngularFireModule,
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
