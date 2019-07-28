import { Component, OnInit, OnDestroy } from '@angular/core';

import { DimentionService } from '../../../services/dimention/dimention.service';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'unicorn-landing-about-me',
  templateUrl: './landing-about-me.component.html',
  styleUrls: ['./landing-about-me.component.sass']
})
export class LandingAboutMeComponent implements OnInit, OnDestroy {

  /** Variable de suscripción al scroll de la página */
  scrollSubscription: Subscription;

  /** Variable que almacena el valor de si el usuario está en about section */
  isInAboutSection: boolean;

  constructor(private dimentionService: DimentionService) { }

  /** Código que se ejecuta al crearse el componente */
  ngOnInit() {
    this.scrollSubscription = combineLatest( this.dimentionService.widthSize,
      this.dimentionService.scrollYCoord).subscribe( currentDimentions => {
        if ((currentDimentions[0] <= 425) && (currentDimentions[1] >= 0)) {
          this.isInAboutSection = true;
        } else if ((currentDimentions[0] >= 576 ) && (currentDimentions[1] >= 50)) {
          this.isInAboutSection = true;
        } else if ((currentDimentions[0] >= 768) && (currentDimentions[1] >= 120)) {
          this.isInAboutSection = true;
        } else if ((currentDimentions[0] >= 992) && (currentDimentions[1] >= 250)) {
          this.isInAboutSection = true;
        }
      });
  }
  /** Código que se ejecuta al destruirse el componente */
  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }


}
