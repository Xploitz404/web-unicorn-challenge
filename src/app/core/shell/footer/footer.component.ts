import { Component, OnInit } from '@angular/core';

import { footerLinks } from '../../../constants/footer-links/footer-links.const';

@Component({
  selector: 'unicorn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  links = footerLinks;

  constructor() { }

  ngOnInit() {
  }

}
