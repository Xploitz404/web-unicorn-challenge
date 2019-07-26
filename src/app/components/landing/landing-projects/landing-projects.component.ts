import { Component, OnInit } from '@angular/core';
import { projectCards } from '../../../constants/project-cards/project-cards.const';

@Component({
  selector: 'unicorn-landing-projects',
  templateUrl: './landing-projects.component.html',
  styleUrls: ['./landing-projects.component.sass']
})
export class LandingProjectsComponent implements OnInit {

  projects = projectCards;

  constructor() { }

  ngOnInit() {
  }

}
