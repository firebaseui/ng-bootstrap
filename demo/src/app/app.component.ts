import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {filter} from 'rxjs/operators';
import {routerTransition} from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (isPlatformBrowser(this.platformId)) {
        window.scroll(0, 0);
      }
    });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
