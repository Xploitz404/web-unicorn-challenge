import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { ShellModule } from '../../core/shell/shell.module';
import { LandingStartComponent } from './landing-start/landing-start.component';
import { LandingAboutMeComponent } from './landing-about-me/landing-about-me.component';
import { LandingProjectsComponent } from './landing-projects/landing-projects.component';

@NgModule({
  declarations: [
    LandingComponent,
    LandingStartComponent,
    LandingAboutMeComponent,
    LandingProjectsComponent
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
