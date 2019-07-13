import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { ShellModule } from '../../core/shell/shell.module';

@NgModule({
  declarations: [
    LandingComponent
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
