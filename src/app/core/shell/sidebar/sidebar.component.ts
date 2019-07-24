import { Component, OnInit, OnDestroy } from '@angular/core';
// Services
import { DimentionService } from '../../../services/dimention/dimention.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'unicorn-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit, OnDestroy {

  /** Variable booleana que almacena si la resolución es Mobile o no */
  isMobile: boolean;
  /** Variable de suscripción al width */
  widthSubscription: Subscription;

  constructor(private dimentionService: DimentionService) { }

  /** Código que se ejecuta al iniciarse el componente */
  ngOnInit() {
    this.widthSubscription = this.dimentionService.widthSize.subscribe( currentWidth => {
      if (currentWidth <= 576) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  /** Código que se ejecuta al destruirse el componente */
  ngOnDestroy() {
    this.widthSubscription.unsubscribe();
  }
}
