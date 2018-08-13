import {Component, Input, OnInit} from '@angular/core';
import {IAlert} from '../../../..';
import {animate, animateChild, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ngb-alerts-container',
  templateUrl: './ngb-alerts-container.component.html',
  styleUrls: ['./ngb-alerts-container.component.scss'],

  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@alerts',
          stagger(300, animateChild())
        )
      ]),
    ]),
    trigger('alerts', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({transform: 'scale(1)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'scale(1)', opacity: 1, height: '*'}),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px'}))
      ]),
    ])
  ]
})
export class NgbAlertsContainerComponent {

  @Input()
  public alerts: Array<IAlert> = [];

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
