import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';

const query = (s, a, o = {optional: true}) => q(s, a, o);


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
])

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    data: {state: 'home'},
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    data: {state: 'getting-started'},
    loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
