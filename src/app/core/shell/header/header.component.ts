import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { headerLinks } from '../../../constants/header-links/header-links.const';
import { DimentionService } from '../../../services/dimention/dimention.service';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'unicorn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  /** Variable de estado que almacena si se ha hecho scroll */
  scrolled: boolean;
  /** Variable de suscripción al evento scroll */
  scrollSubscription: Subscription;
  /** Variable booleana que almacena si la resolución es Mobile o no */
  isMobile: boolean;
  /** Variable de suscripción al width */
  widthSubscription: Subscription;
  /** Instancia de la constante headerLinks */
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
    this.widthSubscription = this.dimentionService.widthSize.subscribe( currentWidth => {
      if (currentWidth < 576) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.scrollSubscription = this.dimentionService.scrollYCoord.subscribe( currentScroll => {
      if (currentScroll >= 100) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    });
  }

  /**
   * Método que lleva a la sección que se le indique como parámetro
   */
  scrollTo(section: string, offsetValue: number) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: section,
      scrollOffset: offsetValue
    });
  }

  ngOnDestroy() {
    this.widthSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }

}
