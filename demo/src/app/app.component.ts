import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {filter} from 'rxjs/operators';
import {animate, group, query, stagger, style, transition, trigger} from '@angular/animations';


export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'})
      , {optional: true}),
    query('.block', style({opacity: 0})
      , {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
      ], {optional: true}),
    ]),
    query(':enter .block', stagger(400, [
      style({transform: 'translateY(100px)'}),
      animate('1s ease-in-out', style({transform: 'translateY(0px)', opacity: 1})),
    ]), {optional: true}),
  ])
]);

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
