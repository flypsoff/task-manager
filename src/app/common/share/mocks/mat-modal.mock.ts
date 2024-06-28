import { Observable, of } from 'rxjs';

export class MatDialogMock {
  open(): MatDialogRefMock {
    return new MatDialogRefMock();
  }

  closeAll(): void {}
}

export class MatDialogRefMock {
  afterClosed(): Observable<boolean> {
    return of(true);
  }

  close(): Observable<boolean> {
    return of(true);
  }
}
