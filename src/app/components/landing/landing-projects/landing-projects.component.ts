import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { projectCards } from '../../../constants/project-cards/project-cards.const';
import { Subscription, combineLatest } from 'rxjs';
import { DimentionService } from 'src/app/services/dimention/dimention.service';

@Component({
  selector: 'unicorn-landing-projects',
  templateUrl: './landing-projects.component.html',
  styleUrls: ['./landing-projects.component.sass']
})
export class LandingProjectsComponent implements OnInit, OnDestroy {

  @Input() parentMessage: string;

  projects = projectCards;

    /** Variable de suscripción al scroll de la página */
    scrollSubscription: Subscription;

    /** Variable que almacena el valor de si el usuario está en projects section */
    isInProjectsSection: boolean;

  constructor(private dimentionService: DimentionService) { }

  ngOnInit() {
    this.scrollSubscription = combineLatest( this.dimentionService.widthSize,
      this.dimentionService.scrollYCoord).subscribe( currentDimentions => {
        if ((currentDimentions[0] <= 425) && (currentDimentions[1] >= 300)) {
          this.isInProjectsSection = true;
        } else if ((currentDimentions[0] >= 576) && (currentDimentions[1] >= 550)) {
          this.isInProjectsSection = true;
        } else if ((currentDimentions[0] >= 1024) && (currentDimentions[1] >= 525)) {
          this.isInProjectsSection = true;
          console.log(currentDimentions);
        }
      });
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

}
