import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgbAlertsContainerComponent} from './ngb-alerts-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('AlertsContainerComponent', () => {
  let component: NgbAlertsContainerComponent;
  let fixture: ComponentFixture<NgbAlertsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot()],
      declarations: [NgbAlertsContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbAlertsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
