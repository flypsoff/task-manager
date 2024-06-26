import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './container/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from '../../../../common/share/components/button/button.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule
  ]
})
export class HomeModule {
}
