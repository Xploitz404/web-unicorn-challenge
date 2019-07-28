import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'unicorn-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit, OnDestroy {
  
  parentMessage = `I'm you father`;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
