import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { headerLinks } from '../../../constants/header-links/header-links.const';

@Component({
  selector: 'unicorn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  scrolled = false;
  /**
   * Instancia de la constante headerLinks
   */
  links = headerLinks;

  /**
   * Instancia de HeaderComponent
   */
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document) {
  }

  ngOnInit() {
  }

  /**
   * Método que lleva a la sección que se le indique como parámetro
   */
  scrollTo(section: string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: section
    });
  }

}
