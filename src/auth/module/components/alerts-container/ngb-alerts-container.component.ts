import {Component, Input, OnInit} from '@angular/core';
import {IAlert} from '../../../..';

@Component({
  selector: 'ngb-alerts-container',
  templateUrl: './ngb-alerts-container.component.html',
  styleUrls: ['./ngb-alerts-container.component.scss']
})
export class NgbAlertsContainerComponent {

  @Input()
  public alerts: Array<IAlert> = [];

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
