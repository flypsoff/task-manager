import { MatDialog } from '@angular/material/dialog';

import { ConfirmModalData } from '../../../../../common/share/components/confirm-modal/models';
import {
  ConfirmModalComponent
} from '../../../../../common/share/components/confirm-modal/container/confirm-modal.component';


export const openDeleteItem = (dialog: MatDialog, data: ConfirmModalData) =>
  dialog.open(
    ConfirmModalComponent,
    {
      data,
      panelClass: 'modal-window',
      autoFocus: false
    }
  );
