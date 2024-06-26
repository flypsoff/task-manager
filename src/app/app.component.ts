import { Component } from '@angular/core';

import { CustomIconService } from './common/core/services/custom-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private customIconService: CustomIconService) {
    this.customIconService.init();
  }
}
