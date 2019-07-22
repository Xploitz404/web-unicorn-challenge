import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgxPageScrollCoreModule.forRoot({duration: 500})
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [],
})
export class ShellModule {}
