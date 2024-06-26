import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from './container/button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [
    MatButtonModule,
    CommonModule
  ]
})
export class ButtonModule {
}
