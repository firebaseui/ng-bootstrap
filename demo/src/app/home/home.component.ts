import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const homeTransition = trigger('homeTransition', [
  transition(':enter', [
    query('.block', style({opacity: 0})),
    query('.block', stagger(300, [
      style({transform: 'translateY(100px)'}),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.block', stagger(300, [
      style({transform: 'translateY(0px)', opacity: 1}),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),
  ])
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [homeTransition],
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @firebaseui/ng-bootstrap');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('AnthonyNahas/@firebaseui/ng-bootstrap/tree/master/demo');
  }

  printUser(event) {
    console.log('on success: ', event);
  }

  printError(event) {
    console.error('on error: ', event);
  }
}
