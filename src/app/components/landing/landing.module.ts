import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [ CommonModule ],
  exports: [
    LandingComponent
  ],
  providers: [],
})
export class LandingModule {}
