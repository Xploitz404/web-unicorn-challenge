import {isPlatformBrowser} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
/** OPERADORES */
import {BehaviorSubject, fromEvent} from 'rxjs';
import {map} from 'rxjs/operators/index';

/**
 * Servicio de dimensiones del navegador.
 */
@Injectable({providedIn: 'root'})
export class DimentionService {
  /** Variable que almacena la coordenada de Y en scroll */
  scrollYCoord = new BehaviorSubject<number>(1);

  /** Variable que almacena el valor del ancho de la pantalla */
  widthSize = new BehaviorSubject<number>(1);

  /** Booleano que detecta si la renderización se está ejecutando en navegador */
  isBrowser: boolean;

  /** Variable que almacena el ancho de un elemento */
  viewHeight = new BehaviorSubject<number>(0);

  /**
   * Crea una instacia de DimentionService.
   * @param {*} platformId
   * @memberof DimentionsService
   */
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.getScrollY();
    this.getWidthScreen();
  }

  /**
   * Método que consigue las coordenadas del scroll en Y
   * @memberof DimentionsService
   */
  getScrollY() {
    if (this.isBrowser) {
      this.scrollYCoord.next(window.scrollY);
      fromEvent(window, 'scroll').pipe(map(() => window.scrollY)).subscribe((coord) => this.scrollYCoord.next(coord));
    }
  }

  /**
   * Método que consigue el ancho de la pantalla
   * @memberof DimentionService
   */
  getWidthScreen() {
    if (this.isBrowser) {
      this.widthSize.next(window.innerWidth);
      fromEvent(window, 'resize').pipe(map(() => window.innerWidth)).subscribe((size) => this.widthSize.next(size));
    }
  }
}
