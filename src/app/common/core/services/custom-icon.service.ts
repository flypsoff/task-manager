import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  init(): void {
    this.matIconRegistry.addSvgIcon(
      'delete-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/delete-icon.svg')
    );
  }
}
