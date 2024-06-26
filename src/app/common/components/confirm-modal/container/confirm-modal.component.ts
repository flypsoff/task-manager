import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmModalData } from '../models';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmModalData,
  ) {
  }
}
