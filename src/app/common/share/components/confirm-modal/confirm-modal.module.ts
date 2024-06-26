import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmModalComponent } from './container/confirm-modal.component';
import { MatRippleModule } from '@angular/material/core';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatRippleModule,
    ButtonModule
  ],
  entryComponents: [ConfirmModalComponent]
})
export class ConfirmModalModule {
}
