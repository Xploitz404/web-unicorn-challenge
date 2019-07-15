import { Component, OnInit } from '@angular/core';

import { CARDS } from '../../../constants/start-cards/start-cards.const';

@Component({
  selector: 'unicorn-landing-start',
  templateUrl: './landing-start.component.html',
  styleUrls: ['./landing-start.component.sass']
})
export class LandingStartComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit() {
  }

}
