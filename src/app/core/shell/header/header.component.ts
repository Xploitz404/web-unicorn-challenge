import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unicorn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  scrolled = false;

  constructor() { }

  ngOnInit() {
  }

}
