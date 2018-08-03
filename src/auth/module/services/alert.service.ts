import {EventEmitter, Injectable} from '@angular/core';
import {IAlert} from '../../..';

@Injectable()
export class AlertService {

  alerts: Array<IAlert> = [];
  onNewAlert: EventEmitter<IAlert> = new EventEmitter<IAlert>();


  constructor() {
    this.onNewAlert.subscribe((alert: IAlert) => this.alerts.push(alert)
    );
  }
}
