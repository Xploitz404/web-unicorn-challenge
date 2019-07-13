import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { ShellModule } from '../../core/shell/shell.module';
import { LandingStartComponent } from './landing-start/landing-start.component';

@NgModule({
  declarations: [
    LandingComponent,
    LandingStartComponent
  ],
  imports: [
    CommonModule,
    ShellModule
  ],
  exports: [
    LandingComponent
  ],
  providers: [],
})
export class LandingModule {}
