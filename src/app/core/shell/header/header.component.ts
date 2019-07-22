import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { headerLinks } from '../../../constants/header-links/header-links.const';
import { DimentionService } from '../../../services/dimention/dimention.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'unicorn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  scrollSubscription: Subscription;

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
    @Inject(DOCUMENT) private document,
    private dimentionService: DimentionService) {
  }

  ngOnInit() {
    this.scrollSubscription = this.dimentionService.scrollYCoord.subscribe( position => {
      if (position > 285) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    });
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

  ngOnDestroy(){
    this.scrollSubscription.unsubscribe();
  }

}
